import dynamic from 'next/dynamic';
import Layout from '../components/Layout';
import styles from '../styles/map.module.scss';
import { useState } from 'react';


// Dummy dolgozók
const employees = [
  { id: 1, name: 'Kovács Anna', avatar: '/avatars/anna.png', position: 'Fejlesztő' },
  { id: 2, name: 'Nagy Béla', avatar: '/avatars/bela.png', position: 'Projektmenedzser' },
  { id: 3, name: 'Szabó Csilla', avatar: '/avatars/csilla.png', position: 'Tesztelő' },
  { id: 4, name: 'Tóth Dániel', avatar: '/avatars/daniel.png', position: 'Designer' },
];

// Dummy székhelyek
const locations = [
  {
    id: 1,
    name: 'Budapest HQ',
    coords: [47.4979, 19.0402], // Budapest
    address: 'Budapest, Fő utca 1.',
    description: 'Fő székhely, fejlesztés és menedzsment.',
    employees: [employees[0], employees[1]]
  },
  {
    id: 2,
    name: 'Debrecen Office',
    coords: [47.5316, 21.6273], // Debrecen
    address: 'Debrecen, Kossuth tér 2.',
    description: 'Regionális iroda, tesztelés és design.',
    employees: [employees[2], employees[3]]
  }
];

const LeafletMap = dynamic(() => import('../components/Map/LeafletMap'), { ssr: false });

export default function MapPage({ onLogout }: { onLogout: () => void }) {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [view, setView] = useState<'profile' | 'chat'>('profile');

  return (
    <Layout>
      <div className={styles.mapPage}>
        <div className={styles.mapContainer}>
          <LeafletMap
            locations={locations}
            onMarkerClick={loc => {
              setSelectedLocation(loc);
              setSelectedEmployee(null);
              setView('profile');
            }}
          />
        </div>
        <div className={styles.infoBox}>
          {!selectedLocation ? (
            <div className={styles.infoPlaceholder}>
              <span>Válassz egy székhelyet a térképen!</span>
            </div>
          ) : !selectedEmployee ? (
            <div>
              <h2>{selectedLocation.name}</h2>
              <div className={styles.address}>{selectedLocation.address}</div>
              <div className={styles.desc}>{selectedLocation.description}</div>
              <h3>Dolgozók:</h3>
              <div className={styles.employeeList}>
                {selectedLocation.employees.map(emp => (
                  <div
                    key={emp.id}
                    className={styles.employeeCard}
                    onClick={() => {
                      setSelectedEmployee(emp);
                      setView('profile');
                    }}
                  >
                    <img src={emp.avatar} alt={emp.name} className={styles.avatar} />
                    <div>
                      <div className={styles.name}>{emp.name}</div>
                      <div className={styles.position}>{emp.position}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div>
              <div className={styles.profileHeader}>
                <img src={selectedEmployee.avatar} alt={selectedEmployee.name} className={styles.avatarLarge} />
                <div>
                  <div className={styles.name}>{selectedEmployee.name}</div>
                  <div className={styles.position}>{selectedEmployee.position}</div>
                  <button className={styles.backBtn} onClick={() => setSelectedEmployee(null)}>Vissza</button>
                  <div style={{ marginTop: '0.7rem', display: 'flex', gap: '0.5rem' }}>
                    <button
                      className={view === 'profile' ? styles.activeTab : ''}
                      onClick={() => setView('profile')}
                    >
                      Profil
                    </button>
                    <button
                      className={view === 'chat' ? styles.activeTab : ''}
                      onClick={() => setView('chat')}
                    >
                      Chat
                    </button>
                  </div>
                </div>
              </div>
              {view === 'profile' ? (
                <div className={styles.profileBox}>
                  <h3>Profil adatok</h3>
                  <p><b>Név:</b> {selectedEmployee.name}</p>
                  <p><b>Pozíció:</b> {selectedEmployee.position}</p>
                </div>
              ) : (
                <div className={styles.chatBox}>
                  <div className={styles.messages}>
                    <div className={styles.message}><b>Te:</b> Szia {selectedEmployee.name}!</div>
                    <div className={styles.message}><b>{selectedEmployee.name}:</b> Szia! Miben segíthetek?</div>
                  </div>
                  <div className={styles.postBox}>
                    <input type="text" placeholder="Írj üzenetet..." />
                    <button>Küldés</button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}