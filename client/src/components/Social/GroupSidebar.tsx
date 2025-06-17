import { useState } from 'react';
import styles from '../../styles/social.module.scss';

type Group = {
  id: string;
  name: string;
  icon?: string;
};

type Props = {
  selectedGroup: string | null;
  onSelectGroup: (id: string) => void;
};

const initialGroups: Group[] = [
  { id: 'general', name: 'Általános', icon: '💬' },
  { id: 'dev', name: 'Fejlesztés', icon: '💻' },
  { id: 'music', name: 'Zene', icon: '🎵' },
];

export default function GroupSidebar({ selectedGroup, onSelectGroup }: Props) {
  const [groups, setGroups] = useState<Group[]>(initialGroups);
  const [showInput, setShowInput] = useState(false);
  const [newGroup, setNewGroup] = useState('');

  function handleAddGroup() {
    if (newGroup.trim().length < 2) return;
    const id = newGroup.toLowerCase().replace(/\s+/g, '-');
    setGroups([...groups, { id, name: newGroup, icon: '🆕' }]);
    setNewGroup('');
    setShowInput(false);
  }

  return (
    <nav className={styles.groupSidebar}>
      {groups.map(g => (
        <div
          key={g.id}
          className={`${styles.groupIcon} ${selectedGroup === g.id ? styles.selected : ''}`}
          title={g.name}
          tabIndex={0}
          onClick={() => onSelectGroup(g.id)}
          onKeyDown={e => e.key === 'Enter' && onSelectGroup(g.id)}
        >
          {g.icon || g.name[0]}
        </div>
      ))}
      {showInput ? (
        <div className={styles.addGroupInputBox}>
          <input
            className={styles.addGroupInput}
            value={newGroup}
            onChange={e => setNewGroup(e.target.value)}
            placeholder="Csoport neve"
            maxLength={20}
            autoFocus
            onKeyDown={e => {
              if (e.key === 'Enter') handleAddGroup();
              if (e.key === 'Escape') setShowInput(false);
            }}
          />
          <button className={styles.addGroupBtn} onClick={handleAddGroup} title="Létrehozás">+</button>
        </div>
      ) : (
        <button
          className={styles.addGroupBtn}
          onClick={() => setShowInput(true)}
          title="Új csoport"
        >+</button>
      )}
    </nav>
  );
}