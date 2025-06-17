import { useState } from 'react';

export default function Login({ onLogin }: { onLogin: () => void }) {
  const [companyId, setCompanyId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const resp = await fetch('http://localhost:8080/api/users/login/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include', // EZ FONTOS!
        body: JSON.stringify({ company_id: companyId, password }),
     });
      const data = await resp.json();
      if (data.success) {
        onLogin();
      } else {
        setError(data.error || 'Hibás belépési adatok');
      }
    } catch (err) {
      setError('Hálózati hiba!');
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{
      maxWidth: 340, margin: 'auto', marginTop: 80, background: '#fff', borderRadius: 16, padding: 32, boxShadow: '0 4px 24px #1976d230'
    }}>
      <h2 style={{ color: '#1976d2', textAlign: 'center', marginBottom: 24 }}>LogIn</h2>
      <div style={{ marginBottom: 16 }}>
        <input
          type="text"
          placeholder="Céges ID"
          value={companyId}
          onChange={e => setCompanyId(e.target.value)}
          required
          style={{ width: '100%', padding: 12, borderRadius: 8, border: '1.5px solid #bbdefb', fontSize: 16 }}
        />
      </div>
      <div style={{ marginBottom: 16 }}>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          style={{ width: '100%', padding: 12, borderRadius: 8, border: '1.5px solid #bbdefb', fontSize: 16 }}
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        style={{
          width: '100%', padding: 12, borderRadius: 8, background: '#1976d2', color: '#fff', fontWeight: 600, fontSize: 16, border: 'none', cursor: loading ? 'not-allowed' : 'pointer'
        }}
      >
        {loading ? 'LogIn...' : 'LogIn'}
      </button>
      {error && <div style={{ color: '#e53935', marginTop: 16, textAlign: 'center' }}>{error}</div>}
    </form>
  );
}