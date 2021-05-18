import React from 'react';
import styles from './app.module.css';
import Profile from '../Profile';
import Sidebar from '../Chats';
import Chat from '../Chat';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className={styles.container}>
      <Switch>
        <Route exact path="/contact/:id?">
          <Sidebar />
          <Chat />
          <Profile />
        </Route>
        <Route>
          <Sidebar />
          <div className={styles.noSelectedChat}>
            <div className={styles.chatNan}>
              Please, select a chat to start messaging
            </div>
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
