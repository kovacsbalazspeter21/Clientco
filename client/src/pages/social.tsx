import Layout from '../components/Layout';
import styles from '../styles/social.module.scss';
import { useState } from 'react';
import GroupSidebar from '../components/Social/GroupSidebar';
import ChatRoom from '../components/Social/ChatRoom';
import MediaPanel from '../components/Social/MediaPanel';

export default function SocialPage({ onLogout }: { onLogout: () => void }) {
  const [selectedGroup, setSelectedGroup] = useState<string | null>(null);

  return (
    <Layout onLogout={onLogout}>
      <div className={styles.socialContainer}>
        {/* Bal oldali csoport lista */}
        <GroupSidebar
          selectedGroup={selectedGroup}
          onSelectGroup={setSelectedGroup}
        />

        {/* Középső chat és média panel */}
        <div className={styles.mainArea}>
          {selectedGroup && (
            <>
              <ChatRoom groupId={selectedGroup} />
              <MediaPanel groupId={selectedGroup} />
            </>
          )}
        </div>
      </div>
    </Layout>
  );
}