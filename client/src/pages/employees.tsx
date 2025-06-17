import Layout from '../components/Layout';
import styles from '../styles/employees.module.scss';
import { useEffect, useState } from 'react';
import EmployeeList from '../components/Employees/EmployeeList';

type Employee = {
  id: number;
  company_id: string;
  username: string;
  first_name: string;
  last_name: string;
  position: string;
  region: string;
  origin: string;
  profile_picture?: string;
};

type Post = {
  id: number;
  author: Employee;
  text: string;
  image?: string;
  created: string;
  comments: Comment[];
  reactions: { [key: string]: number };
};

type Comment = {
  author: Employee;
  text: string;
  created: string;
};

const reactionTypes = [
  { key: 'love', emoji: '😍', label: 'Imádom' },
  { key: 'like', emoji: '👍', label: 'Kedvelem' },
  { key: 'wow', emoji: '😮', label: 'Csodálkozom' },
  { key: 'sad', emoji: '😢', label: 'Szomorú' },
  { key: 'angry', emoji: '😡', label: 'Dühítő' },
  { key: 'hug', emoji: '🤗', label: 'Ölelés' },
  { key: 'fire', emoji: '🔥', label: 'Tüzes' }
];

export default function EmployeesPage({ onLogout }: { onLogout: () => void }) {
  const [currentUser, setCurrentUser] = useState<Employee | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const [selected, setSelected] = useState<number | null>(null);
  const [view, setView] = useState<'profile' | 'chat'>('profile');
  const [newPostText, setNewPostText] = useState('');
  const [newPostImage, setNewPostImage] = useState<string | null>(null);
  const [commentInputs, setCommentInputs] = useState<{ [postId: number]: string }>({});

  // Bejelentkezett user lekérése
  useEffect(() => {
    fetch('/api/users/profile/', { credentials: 'include' })
      .then(res => res.json())
      .then(data => setCurrentUser(data));
  }, []);

  // Posztok lekérése
  useEffect(() => {
    fetch('/api/posts/list/', { credentials: 'include' })
      .then(res => res.json())
      .then(data => setPosts(data));
  }, []);

  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = ev => setNewPostImage(ev.target?.result as string);
      reader.readAsDataURL(file);
    }
  }

  function handlePost() {
    if (!newPostText && !newPostImage) return;
    setPosts([
      {
        id: Date.now(),
        author: currentUser!,
        text: newPostText,
        image: newPostImage || '',
        created: new Date().toISOString(),
        reactions: { love: 0, like: 0, wow: 0, sad: 0, angry: 0, hug: 0, fire: 0 },
        comments: []
      },
      ...posts
    ]);
    setNewPostText('');
    setNewPostImage(null);
  }

  function handleReaction(postId: number, type: string) {
    setPosts(posts =>
      posts.map(post =>
        post.id === postId
          ? { ...post, reactions: { ...post.reactions, [type]: (post.reactions[type] || 0) + 1 } }
          : post
      )
    );
  }

  function handleComment(postId: number) {
    const text = commentInputs[postId];
    if (!text) return;
    setPosts(posts =>
      posts.map(post =>
        post.id === postId
          ? {
              ...post,
              comments: [
                ...post.comments,
                {
                  author: currentUser!,
                  text,
                  created: new Date().toISOString()
                }
              ]
            }
          : post
      )
    );
    setCommentInputs(inputs => ({ ...inputs, [postId]: '' }));
  }

  // Ha nincs még adat, jeleníts meg töltőképernyőt
  if (!currentUser) {
    return (
      <Layout className={styles.employeesPage}>
        <div className={styles.loading}>Loading...</div>
      </Layout>
    );
  }

  useEffect(() => {
    console.log('currentUser:', currentUser);
  }, [currentUser]);

  return (
    <Layout className={styles.employeesPage}>
      <div className={styles.container}>
        {/* Bal oldali sáv: munkatársak */}
        <aside className={styles.sidebar}>
          <h2>Munkatársak</h2>
          <EmployeeList />
        </aside>

        {/* Jobb oldal: globális posztzóna vagy privát chat/profil */}
        <main className={styles.mainArea}>
          {/* ...a többi tartalom változatlan marad... */}
          {/* Itt marad a posztzóna és a profil/chat logika */}
        </main>
      </div>
    </Layout>
  );
}