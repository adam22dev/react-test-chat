import React, { useState } from 'react';
import Chats from '../Chats';
import Messages from '../Messages';
import styles from './app.module.css';
import Profile from '../Profile';
import { Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

function App(props) {
  const [profile,setProfile] =useState(false)

  return (
    <div className={styles.container}>
      <Chats />
      <Messages />
      <CSSTransition>
      <Profile />
      </CSSTransition>
    </div>
  );
}

export default App;
