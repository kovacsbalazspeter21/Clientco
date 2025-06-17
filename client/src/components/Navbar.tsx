import styles from '../styles/profile.module.scss';
import { useRouter } from 'next/router';
/*
import ProfilePage from '../pages/profile';
import Home from '../pages/index';
import CalendarPage from '../pages/calendar';
import EmployeesPage from '../pages/employees';
import LearningPage from '../pages/learning';
import MapPage from '../pages/map';
import SocialPage from '../pages/social';
import Link from 'next/link';
*/

export default function Navbar({ onLogout }: { onLogout: () => void }) {
  const router = useRouter();

  return (
    <header className={styles.navbar}>
      <div className={styles.logo} onClick={() => router.push('/')}>ClientCo</div>
      <nav className={styles.desktopNav}>
       <button  onClick={() => router.push('/')}>Home</button>
        <button onClick={() => router.push('/calendar')}>Calendar</button>
        <button onClick={() => router.push('/employees')}>Colleague</button>
        <button onClick={() => router.push('/learning')}>Learning</button>
        <button onClick={() => router.push('/map')}>Map</button>
        <button onClick={() => router.push('/social')}>Social</button>
        <button onClick={() => router.push('/profile')}>Profile</button>
        <button onClick={onLogout}>Logout</button>
      </nav>
      {/* Hamburger menü mobilra */}
      <input type="checkbox" id="menu-toggle" className={styles.menuToggle} />
      <label htmlFor="menu-toggle" className={styles.menuIcon}>
        <span />
        <span />
        <span />
      </label>
      <nav className={styles.mobileNav}>
        <button onClick={() => router.push('/')}>Home</button>
        <button onClick={() => router.push('/calendar')}>Calendar</button>
        <button onClick={() => router.push('/employees')}>Colleague</button>
        <button onClick={() => router.push('/learning')}>Learning</button>
        <button onClick={() => router.push('/map')}>Map</button>
        <button onClick={() => router.push('/social')}>Social</button>
        <button onClick={() => router.push('/profile')}>Profile</button>
        <button onClick={onLogout}>Logout</button>
      </nav>
    </header>
  );
}