import Layout from '../components/Layout';
import styles from '../styles/learning.module.scss';
import { useState, useEffect, useRef } from 'react';

type Course = { title: string; pages: any[] };
type Test = { question: string; answers: string[]; correct: number }[];

type MaterialFile = {
  filename: string;
  url: string;
};

export default function LearningPage({ onLogout }: { onLogout: () => void }) {
  const [tab, setTab] = useState<'training' | 'test'>('training');
  const [trainings, setTrainings] = useState<MaterialFile[]>([]);
  const [tests, setTests] = useState<MaterialFile[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [selectedMaterial, setSelectedMaterial] = useState<any | null>(null);
  const [slideType, setSlideType] = useState<'training' | 'test'>('training');
  const slideRef = useRef<HTMLDivElement>(null);

  // Listázás
  useEffect(() => {
    fetch('/api/training-learning')
      .then(r => r.json())
      .then(list => setTrainings(list));
    fetch('/api/test-learning')
      .then(r => r.json())
      .then(list => setTests(list));
  }, []);

  // Slide billentyűkezelés
  useEffect(() => {
    if (selectedIndex === null) return;

    function handleKey(e: KeyboardEvent) {
      if (e.key === 'ArrowRight') {
        setSelectedIndex(idx => {
          const arr = slideType === 'training' ? trainings : tests;
          if (idx === null) return 0;
          return Math.min(idx + 1, arr.length - 1);
        });
      }
      if (e.key === 'ArrowLeft') {
        setSelectedIndex(idx => Math.max((idx ?? 1) - 1, 0));
      }
      if (e.key === 'Enter') {
        openMaterial();
      }
      if (e.key === 'Escape') {
        closeSlide();
      }
    }
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
    // eslint-disable-next-line
  }, [selectedIndex, slideType, trainings, tests]);

  // Anyag betöltése
  function openMaterial() {
    const arr = slideType === 'training' ? trainings : tests;
    const file = arr[selectedIndex ?? 0];
    fetch(file.url)
      .then(r => r.json())
      .then(data => setSelectedMaterial(data));
  }

  function closeSlide() {
    setSelectedIndex(null);
    setSelectedMaterial(null);
  }

  // Slide megnyitása
  function openSlide(idx: number, type: 'training' | 'test') {
    setSlideType(type);
    setSelectedIndex(idx);
    setSelectedMaterial(null);
  }

  // Slide tartalom
  function renderSlide() {
    const arr = slideType === 'training' ? trainings : tests;
    if (selectedIndex === null) return null;
    const file = arr[selectedIndex];
    return (
      <div className={styles.slideOverlay} tabIndex={-1} ref={slideRef}>
        <div className={styles.slideCard}>
          <button className={styles.closeBtn} onClick={closeSlide} title="Bezárás (ESC)">×</button>
          <div className={styles.slideHeader}>
            <span className={styles.slideType}>{slideType === 'training' ? 'Tananyag' : 'Teszt'}</span>
            <span className={styles.slideTitle}>{file.filename.replace(/_/g, ' ').replace('.json', '')}</span>
            <span className={styles.slideMeta}>
              {file.filename.match(/\d{13}/)?.[0]
                ? new Date(Number(file.filename.match(/\d{13}/)![0])).toLocaleString()
                : ''}
            </span>
          </div>
          <div className={styles.slideNav}>
            <button
              onClick={() => setSelectedIndex(i => Math.max((i ?? 1) - 1, 0))}
              disabled={selectedIndex === 0}
              className={styles.arrowBtn}
              aria-label="Előző"
            >&#8592;</button>
            <button
              onClick={() => setSelectedIndex(i => {
                const arr = slideType === 'training' ? trainings : tests;
                return Math.min((i ?? 0) + 1, arr.length - 1);
              })}
              disabled={selectedIndex === arr.length - 1}
              className={styles.arrowBtn}
              aria-label="Következő"
            >&#8594;</button>
            <button
              onClick={openMaterial}
              className={styles.openBtn}
              aria-label="Megnyitás (Enter)"
            >Megnyitás (Enter)</button>
          </div>
          {selectedMaterial ? (
            <div className={styles.slideContent}>
              {slideType === 'training' && selectedMaterial.pages ? (
                <>
                  <div className={styles.materialTitle}>{selectedMaterial.title}</div>
                  <div className={styles.materialMeta}>Oldalak száma: {selectedMaterial.pages.length}</div>
                  <ol>
                    {selectedMaterial.pages.slice(0, 10).map((p: any, i: number) => (
                      <li key={i}>
                        <b>{p.title}</b>
                        <div className={styles.materialDesc}>{p.content?.slice(0, 120)}...</div>
                      </li>
                    ))}
                  </ol>
                  {selectedMaterial.pages.length > 10 && (
                    <div style={{ color: '#1976d2' }}>
                      ...és további {selectedMaterial.pages.length - 10} oldal
                    </div>
                  )}
                </>
              ) : slideType === 'test' && Array.isArray(selectedMaterial) ? (
                <ol>
                  {selectedMaterial.slice(0, 10).map((q: any, i: number) => (
                    <li key={i}>
                      <b>{q.question}</b>
                      <ul>
                        {q.answers.map((a: string, j: number) => (
                          <li key={j}>{a}</li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ol>
              ) : <div>Nem sikerült betölteni az anyagot.</div>}
            </div>
          ) : (
            <div className={styles.slideHint}>Nyomj Enter-t a megnyitáshoz!</div>
          )}
        </div>
      </div>
    );
  }

  return (
    <Layout>
      <div className={styles.learningPage}>
        <div className={styles.tabs}>
          <button className={tab === 'training' ? styles.activeTab : ''} onClick={() => setTab('training')}>Tananyagok</button>
          <button className={tab === 'test' ? styles.activeTab : ''} onClick={() => setTab('test')}>Tesztek</button>
        </div>
        <div className={styles.materialList}>
          {tab === 'training' && trainings.map((t, i) => (
            <div
              className={styles.materialCard}
              key={t.filename}
              tabIndex={0}
              onClick={() => openSlide(i, 'training')}
              onKeyDown={e => (e.key === 'Enter' ? openSlide(i, 'training') : undefined)}
            >
              <div className={styles.materialTitle}>{t.filename.replace(/_/g, ' ').replace('.json', '')}</div>
              <div className={styles.materialMeta}>
                {t.filename.match(/\d{13}/)?.[0]
                  ? new Date(Number(t.filename.match(/\d{13}/)![0])).toLocaleString()
                  : ''}
              </div>
            </div>
          ))}
          {tab === 'test' && tests.map((t, i) => (
            <div
              className={styles.materialCard}
              key={t.filename}
              tabIndex={0}
              onClick={() => openSlide(i, 'test')}
              onKeyDown={e => (e.key === 'Enter' ? openSlide(i, 'test') : undefined)}
            >
              <div className={styles.materialTitle}>{t.filename.replace(/_/g, ' ').replace('.json', '')}</div>
              <div className={styles.materialMeta}>
                {t.filename.match(/\d{13}/)?.[0]
                  ? new Date(Number(t.filename.match(/\d{13}/)![0])).toLocaleString()
                  : ''}
              </div>
            </div>
          ))}
        </div>
        {renderSlide()}
      </div>
    </Layout>
  );
}