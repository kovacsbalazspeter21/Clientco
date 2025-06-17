import type { NextApiRequest, NextApiResponse } from 'next';
import { OpenAI } from 'openai';
import fs from 'fs';
import path from 'path';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end();
  const { topic, minPages, maxPages } = req.body;

  const prompt = `
Kérlek, generálj egy "${topic}" témájú tananyagot minimum ${minPages}, maximum ${maxPages} oldal terjedelemben, strukturált .JSON formátumban. 
A tananyag tartalmazzon fejezeteket, oldalakat, és minden oldalhoz rövid összefoglalót.
A végén generálj egy tesztet is: minimum 50, maximum 65 kérdéssel (ha 250 oldal, akkor 3 részes teszt, összesen 65 kérdés), minden kérdéshez 4 randomizált válaszlehetőséggel, egy helyes válasszal.
A teljes válasz egyetlen JSON objektum legyen, például:
{
  "course": {
    "title": "...",
    "pages": [
      { "number": 1, "title": "...", "content": "..." },
      ...
    ]
  },
  "test": [
    {
      "question": "...",
      "answers": ["...", "...", "...", "..."],
      "correct": 2
    },
    ...
  ]
}
`;

  const completion = await openai.chat.completions.create({
    model: 'gpt-4o',
    messages: [{ role: 'user', content: prompt }],
    temperature: 0.7,
    max_tokens: 4096,
  });

  const match = completion.choices[0].message.content?.match(/\{[\s\S]*\}/);
  if (!match) return res.status(500).json({ error: 'Nem sikerült JSON-t generálni.' });

  try {
    const json = JSON.parse(match[0]);
    // Fájlnevek
    const safeTopic = topic.replace(/[^a-z0-9]/gi, '_').toLowerCase();
    const trainingDir = path.join(process.cwd(), 'src/pages/api/training');
    const testDir = path.join(process.cwd(), 'src/pages/api/test');
    if (!fs.existsSync(trainingDir)) fs.mkdirSync(trainingDir, { recursive: true });
    if (!fs.existsSync(testDir)) fs.mkdirSync(testDir, { recursive: true });

    // Tananyag mentése
    fs.writeFileSync(
      path.join(trainingDir, `${safeTopic}_${Date.now()}.json`),
      JSON.stringify(json.course, null, 2)
    );
    // Teszt mentése
    fs.writeFileSync(
      path.join(testDir, `${safeTopic}_${Date.now()}.json`),
      JSON.stringify(json.test, null, 2)
    );

    res.status(200).json(json);
  } catch {
    res.status(500).json({ error: 'Hibás JSON formátum.' });
  }
}