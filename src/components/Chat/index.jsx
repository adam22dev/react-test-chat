import React from 'react';
import styles from './messages.module.css';
import Header from './Header';
import Messages from './Messages';
import WriteMessage from './WriteMessage';

function Chat() {
  return (
    <div className={styles.messages}>
      <Header />
      <Messages />
      <WriteMessage />
    </div>
  );
}

export default Chat;
