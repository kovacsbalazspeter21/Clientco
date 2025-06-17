import { useState, useEffect, useRef } from 'react';
import Login from './login';
import NavBar from '../components/Navbar';


const SESSION_TIMEOUT = 60 * 60 * 1000; // 1 óra

export default function App({ Component, pageProps }: any) {
  const [loggedIn, setLoggedIn] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Ellenőrizd a bejelentkezést böngészőben
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setLoggedIn(!!localStorage.getItem('loggedIn'));
    }
  }, []);

  // Inaktivitás miatti kijelentkeztetés
  useEffect(() => {
    if (!loggedIn) return;
    const resetTimeout = () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setLoggedIn(false);
        localStorage.removeItem('loggedIn');
        alert('Kijelentkeztél inaktivitás miatt.');
      }, SESSION_TIMEOUT);
    };
    const events = ['mousemove', 'keydown', 'click', 'scroll'];
    events.forEach(ev => window.addEventListener(ev, resetTimeout));
    resetTimeout();
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      events.forEach(ev => window.removeEventListener(ev, resetTimeout));
    };
  }, [loggedIn]);

  const handleLogin = () => {
    setLoggedIn(true);
    if (typeof window !== 'undefined') {
      localStorage.setItem('loggedIn', '1');
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    if (typeof window !== 'undefined') {
      localStorage.removeItem('loggedIn');
    }
  };

  if (!loggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  // Bejelentkezve: minden oldal elérhető, a Next.js router kezeli a váltást!
  return (
    <>
      <NavBar onLogout={handleLogout} />
      <Component {...pageProps} onLogout={handleLogout} />
    </>
  );
}