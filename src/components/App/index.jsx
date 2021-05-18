import React, { useEffect, useState } from 'react';
import styles from './app.module.css';
import Profile from '../Profile';
import { CSSTransition } from 'react-transition-group';
import { loadProfile } from '../../redux/ducks/application';
import { useDispatch } from 'react-redux';
import { useHotkeys } from 'react-hotkeys-hook';
import Sidebar from '../Chats';
import Chat from '../Chat';
import { Route, Switch } from 'react-router-dom';

function App() {
  const [showProfile, setShowProfile] = useState(false);
  const dispatch = useDispatch();

  useHotkeys('ctrl+p', () => setShowProfile((showProfile) => !showProfile));
  useEffect(() => {
    dispatch(loadProfile());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <Switch>
        <Route exact path="/contact/:id?">
          <Sidebar />
          <Chat setShowProfile={setShowProfile} showProfile={showProfile} />

          <Profile showProfile={showProfile} />
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
