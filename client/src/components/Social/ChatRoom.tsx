import { useEffect, useRef, useState } from 'react';
import styles from '../../styles/social.module.scss';

type Message = {
  id: number;
  user: string;
  text: string;
  time: string;
};

type Props = {
  groupId: string | null;
};

export default function ChatRoom({ groupId }: Props) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Dummy user for demo
  const user = 'Te';

  // Scroll to bottom on new message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Demo: új csoportnál üzenetek törlése
  useEffect(() => {
    setMessages([]);
  }, [groupId]);

  function sendMessage() {
    if (!input.trim()) return;
    setMessages(msgs => [
      ...msgs,
      {
        id: Date.now(),
        user,
        text: input,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ]);
    setInput('');
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') sendMessage();
  }

  return (
    <section className={styles.chatRoom}>
      <header className={styles.chatHeader}>
        <h2>{groupId ? `#${groupId}` : 'Válassz csoportot!'}</h2>
      </header>
      <div className={styles.chatMessages}>
        {messages.map(msg => (
          <div
            key={msg.id}
            className={`${styles.chatMessage} ${msg.user === user ? styles.ownMessage : ''}`}
          >
            <span className={styles.msgUser}>{msg.user}</span>
            <span className={styles.msgText}>{msg.text}</span>
            <span className={styles.msgTime}>{msg.time}</span>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className={styles.chatInputBox}>
        <input
          className={styles.chatInput}
          placeholder="Írj üzenetet…"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={!groupId}
        />
        <button
          className={styles.sendBtn}
          onClick={sendMessage}
          disabled={!input.trim() || !groupId}
        >
          Küldés
        </button>
      </div>
    </section>
  );
}