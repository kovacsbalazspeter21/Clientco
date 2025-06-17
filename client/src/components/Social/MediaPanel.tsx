import { useRef, useState } from 'react';
import styles from '../../styles/social.module.scss';

type Props = {
  groupId: string | null;
};

type MediaFile = {
  id: number;
  name: string;
  url: string;
  type: string;
};

export default function MediaPanel({ groupId }: Props) {
  const [files, setFiles] = useState<MediaFile[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const fileList = e.target.files;
    if (!fileList) return;
    const newFiles: MediaFile[] = [];
    for (let i = 0; i < fileList.length; i++) {
      const file = fileList[i];
      const url = URL.createObjectURL(file);
      newFiles.push({
        id: Date.now() + i,
        name: file.name,
        url,
        type: file.type,
      });
    }
    setFiles(prev => [...prev, ...newFiles]);
    e.target.value = '';
  }

  function handleUploadClick() {
    fileInputRef.current?.click();
  }

  function renderPreview(file: MediaFile) {
    if (file.type.startsWith('image/')) {
      return <img src={file.url} alt={file.name} className={styles.mediaThumb} />;
    }
    if (file.type.startsWith('video/')) {
      return <video src={file.url} controls className={styles.mediaThumb} />;
    }
    if (file.type.startsWith('audio/')) {
      return <audio src={file.url} controls className={styles.mediaAudio} />;
    }
    if (file.type === 'application/zip' || file.name.endsWith('.zip')) {
      return <span className={styles.mediaIcon}>🗜️</span>;
    }
    if (file.type.startsWith('text/') || file.name.endsWith('.txt') || file.name.endsWith('.md')) {
      return <span className={styles.mediaIcon}>📄</span>;
    }
    if (file.name.match(/\.(pdf|docx?|xlsx?|pptx?)$/i)) {
      return <span className={styles.mediaIcon}>📑</span>;
    }
    if (file.name.match(/\.(js|ts|py|java|c|cpp|cs|html|css|json)$/i)) {
      return <span className={styles.mediaIcon}>💻</span>;
    }
    return <span className={styles.mediaIcon}>📁</span>;
  }

  return (
    <section className={styles.mediaPanel}>
      <header className={styles.mediaHeader}>
        <h3>Média & Fájlmegosztás</h3>
        <button className={styles.uploadBtn} onClick={handleUploadClick} disabled={!groupId}>
          Fájl feltöltése
        </button>
        <input
          ref={fileInputRef}
          type="file"
          multiple
          style={{ display: 'none' }}
          onChange={handleFileChange}
          disabled={!groupId}
        />
      </header>
      <div className={styles.mediaList}>
        {files.length === 0 && (
          <div className={styles.mediaEmpty}>Nincs megosztott fájl ebben a csoportban.</div>
        )}
        {files.map(file => (
          <div className={styles.mediaItem} key={file.id}>
            {renderPreview(file)}
            <div className={styles.mediaName}>{file.name}</div>
            <a href={file.url} download={file.name} className={styles.downloadBtn} title="Letöltés">
              ⬇️
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}