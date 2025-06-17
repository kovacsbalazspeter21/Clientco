import { useState } from 'react';
import styles from '../../styles/social.module.scss';

type User = {
  id: string;
  name: string;
  avatar: string;
};

type Props = {
  users: User[];
};

export default function GroupUserList({ users }: Props) {
  const [profileUser, setProfileUser] = useState<User | null>(null);
  const [privateChatUser, setPrivateChatUser] = useState<User | null>(null);
  const [callState, setCallState] = useState<{ user: User; type: 'voice' | 'video' } | null>(null);

  function viewProfile(userId: string) {
    const user = users.find(u => u.id === userId) || null;
    setProfileUser(user);
    setPrivateChatUser(null);
    setCallState(null);
  }

  function startPrivateChat(userId: string) {
    const user = users.find(u => u.id === userId) || null;
    setPrivateChatUser(user);
    setProfileUser(null);
    setCallState(null);
  }

  function startPrivateCall(userId: string, type: 'voice' | 'video') {
    const user = users.find(u => u.id === userId) || null;
    if (user) setCallState({ user, type });
    setProfileUser(null);
    setPrivateChatUser(null);
  }

  function closeModal() {
    setProfileUser(null);
    setPrivateChatUser(null);
    setCallState(null);
  }

  return (
    <div>
      <ul className={styles.userList}>
        {users.map(user => (
          <li key={user.id} className={styles.userListItem}>
            <img src={user.avatar} alt="" className={styles.userAvatar} />
            <span>{user.name}</span>
            <button onClick={() => viewProfile(user.id)}>👤</button>
            <button onClick={() => startPrivateChat(user.id)}>💬</button>
            <button onClick={() => startPrivateCall(user.id, 'voice')}>📞</button>
            <button onClick={() => startPrivateCall(user.id, 'video')}>🎥</button>
          </li>
        ))}
      </ul>

      {/* Profilnézet modal */}
      {profileUser && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modalCard} onClick={e => e.stopPropagation()}>
            <img src={profileUser.avatar} alt="" className={styles.profileAvatar} />
            <h3>{profileUser.name}</h3>
            <p>Felhasználó ID: {profileUser.id}</p>
            <button onClick={closeModal}>Bezár</button>
          </div>
        </div>
      )}

      {/* Privát chat modal */}
      {privateChatUser && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modalCard} onClick={e => e.stopPropagation()}>
            <h3>Privát chat {privateChatUser.name}-val/vel</h3>
            <div className={styles.privateChatDemo}>
              <p>(Itt jelenne meg a privát chat ablak...)</p>
            </div>
            <button onClick={closeModal}>Bezár</button>
          </div>
        </div>
      )}

      {/* Hívás modal */}
      {callState && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modalCard} onClick={e => e.stopPropagation()}>
            <h3>
              {callState.type === 'voice' ? 'Hanghívás' : 'Videóhívás'} {callState.user.name}-val/vel
            </h3>
            <div className={styles.callDemo}>
              <p>(Itt jelenne meg a {callState.type === 'voice' ? 'hang' : 'videó'}hívás UI...)</p>
            </div>
            <button onClick={closeModal}>Bezár</button>
          </div>
        </div>
      )}
    </div>
  );
}