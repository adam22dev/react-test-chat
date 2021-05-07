import React from 'react';
import Chats from '../Chats';
import Messages from '../Messages';
import styles from './app.module.css';
import Profile from '../Profile';
import { Route } from 'react-router-dom';

function App(props) {
  return (
    <div className={styles.container}>
      <Route path="/:id?">
        <Chats />
        <Messages />
        <Profile />
      </Route>
    </div>
  );
}

export default App;
