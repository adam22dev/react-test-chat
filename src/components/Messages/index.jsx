import React from 'react';
import styles from './messages.module.css'
import Header from './Header';
import MessagesModal from './MessagesModal';
import WriteMessage from './WriteMessage';

function Messages(props) {
  return (
    <div className={styles.messages}>
      <Header />
      <MessagesModal />
      <WriteMessage />
    </div>
  );
}

export default Messages;
