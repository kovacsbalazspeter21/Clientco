import React, { useState } from 'react';
import styles from '../../styles/calendar.module.scss';

type Bonus = { name: string; amount: number };
type ExtraActivity = { label: string; minutes: number };

type Props = {
  workTime: number; // ledolgozott percek
  bonuses?: Bonus[];
  extraActivities?: ExtraActivity[];
  onAddActivity?: (activity: ExtraActivity) => void;
  onRequestShift?: () => void;
  onCafeteria?: () => void;
  onAddMissingTask?: (task: string) => void;
};

export default function WorkProgressBar({
  workTime,
  bonuses = [],
  extraActivities = [],
  onAddActivity,
  onRequestShift,
  onCafeteria,
  onAddMissingTask,
}: Props) {
  const total = 8 * 60; // 8 óra
  const percent = Math.min(100, (workTime / total) * 100);

  const [activityLabel, setActivityLabel] = useState('');
  const [activityMinutes, setActivityMinutes] = useState(5);
  const [missingTask, setMissingTask] = useState('');

  // Bónuszok összegzése
  const totalBonus = bonuses.reduce((sum, b) => sum + b.amount, 0);

  return (
    <div className={styles.workProgressBox}>
      <div className={styles.progressBarOuter}>
        <div
          className={styles.progressBarInner}
          style={{ width: `${percent}%` }}
        />
      </div>
      <div className={styles.progressInfo}>
        <span>
          {Math.floor(workTime / 60)} óra {workTime % 60} perc / 8 óra
        </span>
        <span className={styles.progressPercent}>{percent.toFixed(1)}%</span>
      </div>

      {bonuses.length > 0 && (
        <div className={styles.bonusBox}>
          <b>Bónuszok:</b>
          <ul>
            {bonuses.map(b => (
              <li key={b.name}>
                {b.name}: <span className={styles.bonusAmount}>{b.amount} Ft</span>
              </li>
            ))}
          </ul>
          <div className={styles.bonusTotal}>Összesen: {totalBonus} Ft</div>
        </div>
      )}

      <div className={styles.extraActivitiesBox}>
        <b>Extra tevékenységek:</b>
        <ul>
          {extraActivities.map((a, i) => (
            <li key={i}>
              {a.label} – {a.minutes} perc
            </li>
          ))}
        </ul>
        <form
          className={styles.activityForm}
          onSubmit={e => {
            e.preventDefault();
            if (activityLabel && onAddActivity) {
              onAddActivity({ label: activityLabel, minutes: activityMinutes });
              setActivityLabel('');
              setActivityMinutes(5);
            }
          }}
        >
          <input
            type="text"
            placeholder="Pl. ebédszünet"
            value={activityLabel}
            onChange={e => setActivityLabel(e.target.value)}
            className={styles.activityInput}
            required
          />
          <input
            type="number"
            min={1}
            max={120}
            value={activityMinutes}
            onChange={e => setActivityMinutes(Number(e.target.value))}
            className={styles.activityInput}
            style={{ width: 60 }}
            required
          />
          <span>perc</span>
          <button type="submit" className={styles.activityBtn}>Hozzáad</button>
        </form>
      </div>

      <div className={styles.actionsBox}>
        <button className={styles.actionBtn} onClick={onRequestShift}>Beosztás kérelem</button>
        <button className={styles.actionBtn} onClick={onCafeteria}>Cafeteria nyilatkozat</button>
      </div>

      <div className={styles.missingTaskBox}>
        <form
          onSubmit={e => {
            e.preventDefault();
            if (missingTask && onAddMissingTask) {
              onAddMissingTask(missingTask);
              setMissingTask('');
            }
          }}
        >
          <input
            type="text"
            placeholder="Hiányzó feladat (mindenkinél megjelenik)"
            value={missingTask}
            onChange={e => setMissingTask(e.target.value)}
            className={styles.activityInput}
            required
          />
          <button type="submit" className={styles.activityBtn}>Beküldés</button>
        </form>
      </div>
    </div>
  );
}