import React from 'react';
import Chats from '../Chats';
import Messages from '../Messages';
import styles from './app.module.css';
import Profile from '../Profile';
import { Route } from 'react-router-dom';

function App(props) {
  return (
    <div className={styles.container}>
      <Chats />
      <Route path="/contact/:id?">
        <Messages />
      </Route>
      <Profile />
    </div>
  );
}

export default App;
