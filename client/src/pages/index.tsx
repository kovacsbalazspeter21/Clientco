import Layout from '../components/Layout';
import styles from '../styles/home.module.scss';
import { useEffect, useRef, useState } from 'react';
import ProtectedRoute from '../components/ProtectedRoute';


const partners = [
  { name: 'Partner 1', logo: '/partners/partner1.png' },
  { name: 'Partner 2', logo: '/partners/partner2.png' },
  { name: 'Partner 3', logo: '/partners/partner3.png' },
  { name: 'Partner 4', logo: '/partners/partner4.png' },
  { name: 'Partner 5', logo: '/partners/partner5.png' },
];

const news = [
  {
    title: 'Új funkció: Naptár hónapváltás',
    date: '2025-06-15',
    description: 'Mostantól a naptárban hónapot is válthatsz, és mindig az aktuális nap lesz kijelölve.'
  },
  {
    title: 'Partner slider frissítés',
    date: '2025-06-14',
    description: 'A partnerek logói mostantól modern, blur-ös sliderben jelennek meg a főoldalon.'
  },
  {
    title: 'Reszponzív dizájn',
    date: '2025-06-13',
    description: 'Az oldal teljesen mobilbarát lett, minden funkció reszponzív.'
  }
];

export default function Home({ onLogout }: { onLogout: () => void }) {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % partners.length);
    }, 3500);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current]);

  const prev = () => setCurrent((current - 1 + partners.length) % partners.length);
  const next = () => setCurrent((current + 1) % partners.length);

  const prevIdx = (current - 1 + partners.length) % partners.length;
  const nextIdx = (current + 1) % partners.length;

  return (
    <ProtectedRoute>
      <Layout className={styles.homeContainer}>
        <section className={styles.newsSection}>
          <h1>Üdvözlünk a ClientCo belső platformján!</h1>
          <h2>Újdonságok</h2>
          <ul className={styles.newsList}>
            {news.map((item, idx) => (
              <li key={idx} className={styles.newsItem}>
                <div className={styles.newsHeader}>
                  <span className={styles.newsTitle}>{item.title}</span>
                  <span className={styles.newsDate}>{item.date}</span>
                </div>
                <div className={styles.newsDesc}>{item.description}</div>
              </li>
            ))}
          </ul>
        </section>

        <footer className={styles.footer}>
          <h2>Partnereink</h2>
          <div className={styles.sliderWrapper}>
            <button className={styles.arrow} onClick={prev} aria-label="Előző partner">
              &#8592;
            </button>
            <div className={styles.slider}>
              <div className={styles.partner + ' ' + styles.prev}>
                <img src={partners[prevIdx].logo} alt={partners[prevIdx].name} />
              </div>
              <div className={styles.partner + ' ' + styles.active}>
                <img src={partners[current].logo} alt={partners[current].name} />
              </div>
              <div className={styles.partner + ' ' + styles.next}>
                <img src={partners[nextIdx].logo} alt={partners[nextIdx].name} />
              </div>
            </div>
            <button className={styles.arrow} onClick={next} aria-label="Következő partner">
              &#8594;
            </button>
          </div>
        </footer>
      </Layout>
    </ProtectedRoute>
  );
}