import React from 'react';
import Chats from '../Chats';
import Messages from '../Messages';
import styles from './app.module.css'
import Profile from '../Profile';

function App(props) {
  return(
    <div className={styles.container}>
      <Chats />
      <Messages />
      <Profile />
    </div>
  )
}

export default App;
