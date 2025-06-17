import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const dir = path.join(process.cwd(), 'src/pages/api/training');
  if (!fs.existsSync(dir)) return res.status(200).json([]);
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.json'));
  const list = files.map(filename => ({
    filename,
    url: `/api/training/${filename}`,
  }));
  res.status(200).json(list);
}