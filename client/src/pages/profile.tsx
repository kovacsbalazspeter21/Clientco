import Layout from '../components/Layout';
import styles from '../styles/profile.module.scss';
import { useEffect, useState } from 'react';

type Post = { id: number; content: string; created: string };
type Mention = { id: number; author__username: string; content: string; created: string };

type Profile = {
  company_id: string;
  username: string;
  birth_year: number | string;
  email: string;
  position: string;
  region: string;
  origin: string;
  bio: string;
  profile_picture?: string;
  posts: Post[];
  mentions: Mention[];
};

export default function ProfilePage({ onLogout }: { onLogout: () => void }) {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [editImage, setEditImage] = useState(false);
  const [mobileTab, setMobileTab] = useState<'profile' | 'posts'>('profile');

  useEffect(() => {
    fetch('http://localhost:8080/api/users/profile/', { credentials: 'include' })
      .then(res => {
        if (res.status === 403 || res.status === 401) {
          onLogout();
          return null;
        }
        return res.json();
      })
      .then(data => data && setProfile(data));
  }, []);

  if (!profile) return <div className={styles.loading}>Loading...</div>;

  // Profilkép módosítás handler (csak vázlat)
  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    // TODO: API hívás képfeltöltésre
    setEditImage(false);
  }

  return (
    <Layout>
      <div className={styles.profileContainer}>
        {/* Hamburger menü mobilon */}
        <div className={styles.hamburgerMenu}>
          <input type="checkbox" id="menu-toggle" className={styles.menuToggle} />
          <label htmlFor="menu-toggle" className={styles.menuIcon}>
            <span />
            <span />
            <span />
          </label>
          <nav className={styles.mobileNav}>
            <button onClick={() => setMobileTab('profile')}>Profil</button>
            <button onClick={() => setMobileTab('posts')}>Posztok & Említések</button>
            <button onClick={onLogout}>Kijelentkezés</button>
          </nav>
        </div>
        <div className={styles.profileMain}>
          {/* Bal blokk: profil (desktopon mindig látszik, mobilon csak ha tab=profile) */}
          <div className={styles.leftBlock} data-visible={mobileTab === 'profile'}>
            <div className={styles.profileImageWrapper}>
              <img
                src={profile.profile_picture || '/profile-placeholder.png'}
                alt="Profilkép"
                className={styles.profileImage}
                onClick={() => setEditImage(true)}
                style={{ cursor: 'pointer' }}
              />
              {editImage && (
                <form>
                  <input type="file" accept="image/*" onChange={handleImageChange} />
                  <button type="button" onClick={() => setEditImage(false)}>Mégse</button>
                </form>
              )}
            </div>
            <div className={styles.profileData}>
              <div><b>Céges ID:</b> {profile.company_id}</div>
              <div><b>Felhasználónév:</b> {profile.username}</div>
              <div><b>Születési év:</b> {profile.birth_year}</div>
              <div><b>Email:</b> {profile.email}</div>
              <div><b>Pozíció:</b> {profile.position}</div>
              <div><b>Régió:</b> {profile.region}</div>
              <div><b>Származási hely:</b> {profile.origin}</div>
              <div><b>Bemutatkozó:</b> {profile.bio}</div>
            </div>
            <button onClick={onLogout} className={styles.logoutBtn}>Kijelentkezés</button>
          </div>
          {/* Jobb blokk: posztok, említések (desktopon mindig látszik, mobilon csak ha tab=posts) */}
          <div className={styles.rightBlock} data-visible={mobileTab === 'posts'}>
            <div className={styles.section}>
              <h3>Saját posztok</h3>
              {profile.posts.length === 0 ? (
                <div className={styles.empty}>Nincs saját posztod.</div>
              ) : (
                <ul className={styles.postList}>
                  {profile.posts.map((post) => (
                    <li key={post.id}>
                      <span>{post.content}</span>
                      <span className={styles.postDate}>{post.created}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className={styles.section}>
              <h3>Említések</h3>
              {profile.mentions.length === 0 ? (
                <div className={styles.empty}>Nincs említés.</div>
              ) : (
                <ul className={styles.postList}>
                  {profile.mentions.map((m) => (
                    <li key={m.id}>
                      <span>
                        <b>@{m.author__username}</b>: {m.content}
                      </span>
                      <span className={styles.postDate}>{m.created}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
        {/* Mobilon balra/jobbra váltó gombok */}
        <div className={styles.mobileSwitch}>
          <button
            className={styles.switchBtn}
            onClick={() => setMobileTab('profile')}
            disabled={mobileTab === 'profile'}
          >Profil</button>
          <button
            className={styles.switchBtn}
            onClick={() => setMobileTab('posts')}
            disabled={mobileTab === 'posts'}
          >Posztok & Említések</button>
        </div>
      </div>
    </Layout>
  );
}