import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const loggedIn = localStorage.getItem('loggedIn');
      if (!loggedIn) {
        router.replace('/login');
      }
    }
  }, [router]);

  return <>{children}</>;
}