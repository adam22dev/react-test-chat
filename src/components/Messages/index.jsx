import React from 'react';
import styles from './messages.module.css'
import Header from './Header';
import MessagesModal from './MessagesModal';
import WriteMessage from './WriteMessage';
import { useParams } from 'react-router-dom';

function Messages(props) {
  const id = useParams().id


  return (
    <div className={styles.messages}>
      <Header />
      <MessagesModal idContacts={id} />
      <WriteMessage />
    </div>
  );
}

export default Messages;
