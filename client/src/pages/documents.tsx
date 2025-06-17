import styles from '../styles/documents.module.scss';

export default function DocumentsPage() {
  return (
    <div className={styles.docsBox}>
      <h2 className={styles.docsTitle}>📄 Dokumentumok</h2>
      <div className={styles.docsCard}>
        <ul className={styles.docsList}>
          <li>
            <a href="/api/docs/szerzodes.pdf" download className={styles.docsLink}>
              <span className={styles.docsIcon}>📑</span>
              Szerződés
            </a>
          </li>
          <li>
            <a href="/api/docs/utmutato.pdf" download className={styles.docsLink}>
              <span className={styles.docsIcon}>📘</span>
              Felhasználói útmutató
            </a>
          </li>
          {/* További dokumentumok */} 
        </ul>
      </div>
      <div className={styles.docsInfo}>
        <p>
          Itt találod az összes fontos szerződést, igazolást és letölthető dokumentumot. 
          A fájlok mindig a legfrissebb verzióban érhetők el.
        </p>
      </div>
    </div>
  );
}