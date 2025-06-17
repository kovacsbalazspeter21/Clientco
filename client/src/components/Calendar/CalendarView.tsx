import React, { useState, useEffect } from 'react';
import ShiftLegend from './ShiftLegend';
import CheckInButton from './CheckInButton';
import WorkProgressBar from './WorkProgressBar';
import styles from '../../styles/calendar.module.scss';

const dayLabels = ['H', 'K', 'Sze', 'Cs', 'P', 'Szo', 'V'];
const monthNames = [
  'Január', 'Február', 'Március', 'Április', 'Május', 'Június',
  'Július', 'Augusztus', 'Szeptember', 'Október', 'November', 'December'
];

function getRandomShift(i: number, year: number, month: number) {
  const date = new Date(year, month, i + 1);
  const day = date.getDay();
  if (day === 0 || day === 6) return { type: 'rest' };
  if (i === 4) return { type: 'sick' };
  if (i === 14) return { type: 'vacation' };
  return { type: 'work', from: '08:00', to: '16:00' };
}

function getDays(year: number, month: number) {
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  return Array.from({ length: daysInMonth }, (_, i) => {
    const shift = getRandomShift(i, year, month);
    return {
      date: new Date(year, month, i + 1),
      label: `${i + 1}`,
      shift,
      meetings: (shift.type === 'work' && (i % 7 === 2)) ? [
        { title: 'Sprint meeting', time: '10:00-11:00' }
      ] : []
    };
  });
}

export default function CalendarView() {
  // Aktuális dátum figyelése (ha éjfélkor átvált, frissül)
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 60 * 1000); // percenként frissít
    return () => clearInterval(interval);
  }, []);

  const [year, setYear] = useState(now.getFullYear());
  const [month, setMonth] = useState(now.getMonth());
  const [days, setDays] = useState(() => getDays(year, month));
  const [selectedDay, setSelectedDay] = useState(() => {
    const idx = getDays(year, month).findIndex(
      d =>
        d.date.getFullYear() === now.getFullYear() &&
        d.date.getMonth() === now.getMonth() &&
        d.date.getDate() === now.getDate()
    );
    return idx !== -1 ? getDays(year, month)[idx] : getDays(year, month)[0];
  });

  // Ha változik a hónap, év vagy a nap (éjfélkor), frissítjük a napokat és a kijelölt napot
  useEffect(() => {
    const newDays = getDays(year, month);
    setDays(newDays);
    const idx = newDays.findIndex(
      d =>
        d.date.getFullYear() === now.getFullYear() &&
        d.date.getMonth() === now.getMonth() &&
        d.date.getDate() === now.getDate()
    );
    setSelectedDay(idx !== -1 ? newDays[idx] : newDays[0]);
  }, [year, month, now]);

  function getDayMessage(day: typeof days[0]) {
    if (day.shift.type === 'work') {
      let msg = `Munkaidő: ${day.shift.from} - ${day.shift.to}`;
      if (day.meetings.length > 0) {
        msg += `\nMeeting: ${day.meetings.map(m => `${m.title} (${m.time})`).join(', ')}`;
      }
      return msg;
    }
    if (day.shift.type === 'rest') return 'Pihenőnap!';
    if (day.shift.type === 'vacation') return 'Szabadság!';
    if (day.shift.type === 'sick') return 'Táppénz!';
    return 'Nincs adat!';
  }

  // Naptár grid előkészítése (első nap hétköznapja)
  const firstDay = new Date(year, month, 1).getDay() || 7;
  const calendarCells = [
    ...Array(firstDay - 1).fill(null),
    ...days
  ];
  while (calendarCells.length % 7 !== 0) calendarCells.push(null);

  function prevMonth() {
    if (month === 0) {
      setMonth(11);
      setYear(y => y - 1);
    } else {
      setMonth(m => m - 1);
    }
  }
  function nextMonth() {
    if (month === 11) {
      setMonth(0);
      setYear(y => y + 1);
    } else {
      setMonth(m => m + 1);
    }
  }

  // A ShiftLegend-hez szükséges értékek
  const selectedDayType =
    selectedDay && ['rest', 'vacation', 'sick', 'meeting'].includes(selectedDay.shift.type)
      ? selectedDay.shift.type
      : null;
  const selectedDayHasMeeting = selectedDay ? (selectedDay.meetings && selectedDay.meetings.length > 0) : false;

  return (
    <div>
      <div className={styles.calendarPage}>
        <div className={styles.calendarMain}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
            <button onClick={prevMonth}>&lt;</button>
            <span style={{ fontWeight: 600, fontSize: '1.2em' }}>
              {monthNames[month]} {year}
            </span>
            <button onClick={nextMonth}>&gt;</button>
          </div>
          <div className={styles.monthGrid}>
            <div className={styles.dayLabels}>
              {dayLabels.map(label => (
                <div key={label} className={styles.dayLabel}>{label}</div>
              ))}
            </div>
            <div className={styles.daysGrid}>
              {calendarCells.map((day, idx) =>
                day ? (
                  <div
                    key={day.label}
                    className={`${styles.dayCell} ${selectedDay && selectedDay.label === day.label ? styles.selected : ''} ${styles[day.shift.type] || ''}`}
                    onClick={() => setSelectedDay(day)}
                  >
                    <span>{day.label}</span>
                  </div>
                ) : (
                  <div key={idx} className={styles.dayCell + ' ' + styles.empty}></div>
                )
              )}
            </div>
          </div>
        </div>
        <div className={styles.blockBox}>
          <span style={{ whiteSpace: 'pre-line' }}>{selectedDay ? getDayMessage(selectedDay) : ''}</span>
          <ShiftLegend dayType={selectedDayType as any} hasMeeting={selectedDayHasMeeting} />
        </div>
      </div>
    </div>
  );
}