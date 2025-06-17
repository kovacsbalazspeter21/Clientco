import React, { useState } from 'react';
import styles from '../../styles/calendar.module.scss';

type DaySummary = {
  date: string; // '2025-06-13'
  type: 'work' | 'rest' | 'vacation' | 'sick';
  minutes: number; // ledolgozott percek
};

type Props = {
  days: DaySummary[];
  month: number;
  year: number;
  onDownloadSummary: () => void;
};

export default function WorkSummaryPanel({ days, month, year, onDownloadSummary }: Props) {
  const [open, setOpen] = useState(false);

  // Naptár grid (7 oszlop, max 6 sor)
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay() || 7;
  const calendarCells = [
    ...Array(firstDay - 1).fill(null),
    ...days.map(d => d),
  ];
  while (calendarCells.length % 7 !== 0) calendarCells.push(null);

  const totalMinutes = days.filter(d => d.type === 'work').reduce((sum, d) => sum + d.minutes, 0);

  return (
    <div className={styles.workSummaryBox}>
      <h4>Munkaidő naptár</h4>
      <div className={styles.summaryCalendarGrid}>
        {calendarCells.map((d, idx) =>
          d ? (
            <div
              key={d.date}
              className={`${styles.summaryDayCell} ${styles[d.type]}`}
              title={d.type === 'work' ? `${Math.floor(d.minutes / 60)}h ${d.minutes % 60}m` : d.type}
            >
              {parseInt(d.date.split('-')[2], 10)}
            </div>
          ) : (
            <div key={idx} className={styles.summaryDayCell + ' ' + styles.empty}></div>
          )
        )}
      </div>
      <div className={styles.summaryTotal}>
        <b>Összesen ledolgozott idő:</b> {Math.floor(totalMinutes / 60)} óra {totalMinutes % 60} perc
      </div>
      <button className={styles.summaryToggleBtn} onClick={() => setOpen(o => !o)}>
        {open ? 'Napi bontás elrejtése ▲' : 'Napi bontás megtekintése ▼'}
      </button>
      {open && (
        <div className={styles.summaryDetails}>
          <ul>
            {days.map(d => (
              <li key={d.date}>
                {d.date}: {d.type === 'work'
                  ? `${Math.floor(d.minutes / 60)}h ${d.minutes % 60}m`
                  : d.type === 'rest'
                  ? 'Pihenőnap'
                  : d.type === 'vacation'
                  ? 'Szabadság'
                  : 'Táppénz'}
              </li>
            ))}
          </ul>
        </div>
      )}
      <button className={styles.summaryDownloadBtn} onClick={onDownloadSummary}>
        Havi összesítő letöltése
      </button>
    </div>
  );
}