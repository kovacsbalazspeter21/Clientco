import React, { useState } from 'react';
import CalendarView from '../components/Calendar/CalendarView';
import CheckInButton from '../components/Calendar/CheckInButton';
import WorkProgressBar from '../components/Calendar/WorkProgressBar';
import styles from '../styles/calendar.module.scss';

const MENU_ITEMS = [
  { key: 'calendar', label: 'Naptár' },
  { key: 'checkin', label: 'Munkaidő becsekkolás' },
  { key: 'progress', label: 'Munkaidő összesítő' },
];

export default function CalendarPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState('calendar');

  // Példa state-ek (ezeket a valós logikád szerint töltsd fel/backendre kösd)
  const [checkedIn, setCheckedIn] = useState(false);
  const [workTime, setWorkTime] = useState(0);
  const [bonuses, setBonuses] = useState([{ name: 'Havi prémium', amount: 12000 }]);
  const [extraActivities, setExtraActivities] = useState([]);
  const [missingTasks, setMissingTasks] = useState<string[]>([]);

  // Hamburger menü kattintás
  function handleMenuSelect(key: string) {
    setSelectedMenu(key);
    setMenuOpen(false);
  }

  return (
    <div className={styles.calendarPageWrapper}>
     
      {/* Tartalom */}
      <div className={styles.calendarContent}>
        {/* Hamburger ikon */}
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(m => !m)}
          aria-label="Menü"
        >
          <span />
          <span />
          <span />
        </button>

        {/* Menü */}
        {menuOpen && (
          <nav className={styles.menuDrawer}>
            {MENU_ITEMS.map(item => (
              <button
                key={item.key}
                className={selectedMenu === item.key ? styles.menuSelected : ''}
                onClick={() => handleMenuSelect(item.key)}
              >
                {item.label}
              </button>
            ))}
            <button
              className={selectedMenu === 'docs' ? styles.menuSelected : ''}
              onClick={() => handleMenuSelect('docs')}
            >
              Dokumentumok
            </button>
          </nav>
        )}


        {selectedMenu === 'calendar' && <CalendarView />}
        {selectedMenu === 'checkin' && (
          <CheckInButton
            checkedIn={checkedIn}
            setCheckedIn={setCheckedIn}
            setWorkTime={setWorkTime}
          />
        )}
        {selectedMenu === 'progress' && (
          <WorkProgressBar
            workTime={workTime}
            bonuses={bonuses}
            extraActivities={extraActivities}
            onAddActivity={activity =>
              setExtraActivities(prev => [...prev, activity])
            }
            onAddMissingTask={task =>
              setMissingTasks(prev => [...prev, task])
            }
            onRequestShift={() => alert('Beosztás kérelem elküldve!')}
            onCafeteria={() => alert('Cafeteria nyilatkozat elküldve!')}
          />
        )}
      </div>
    </div>
  );
}