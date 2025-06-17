import React, { useState, useRef, useEffect } from 'react';
import styles from '../../styles/calendar.module.scss';

type Props = {
  checkedIn: boolean;
  workTime: number;
  onCheckOut: () => void;
  onUploadFile: (file: File) => void;
  onUploadImage: (file: File) => void;
};

export default function CheckInWorkPanel({
  checkedIn,
  workTime,
  onCheckOut,
  onUploadFile,
  onUploadImage,
}: Props) {
  const [elapsed, setElapsed] = useState(workTime);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (checkedIn) {
      intervalRef.current = setInterval(() => {
        setElapsed(e => e + 1000);
      }, 1000);
    } else {
      setElapsed(workTime);
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [checkedIn]);

  // Idő formázás
  const formatTime = (ms: number) => {
    const totalSec = Math.floor(ms / 1000);
    const h = Math.floor(totalSec / 3600);
    const m = Math.floor((totalSec % 3600) / 60);
    const s = totalSec % 60;
    return [h, m, s].map(n => n.toString().padStart(2, '0')).join(':');
  };

  // Fájl feltöltés
  const fileInputRef = useRef<HTMLInputElement>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      onUploadFile(e.target.files[0]);
      e.target.value = '';
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      onUploadImage(e.target.files[0]);
      e.target.value = '';
    }
  };

  return (
    <div className={styles.checkInWorkPanel}>
      <div className={styles.checkInTimerBox}>
        <span className={styles.checkInTimerActive}>{formatTime(elapsed)}</span>
        <button className={styles.checkOutBtn} onClick={onCheckOut}>
          Kicsekkolás
        </button>
      </div>
      <div className={styles.workActions}>
        <button
          className={styles.uploadBtn}
          onClick={() => fileInputRef.current?.click()}
        >
          Dokumentum feltöltése
        </button>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />
        <button
          className={styles.uploadBtn}
          onClick={() => imageInputRef.current?.click()}
        >
          Kép feltöltése/készítése
        </button>
        <input
          type="file"
          ref={imageInputRef}
          accept="image/*"
          capture="environment"
          style={{ display: 'none' }}
          onChange={handleImageChange}
        />
      </div>
    </div>
  );
}