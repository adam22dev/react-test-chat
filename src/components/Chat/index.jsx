import React from 'react';
import styles from './messages.module.css'
import Header from './Header';
import Messages from './Messages';
import WriteMessage from './WriteMessage';
import { Route, Switch } from 'react-router-dom';
import SelectChatPage from './SelectChatPage';

function Chat(props) {
  return (
    <div className={styles.messages}>
      <Switch>
        <Route path="/contact/:id?">
        <Header  setShowProfile={props.setShowProfile} showProfile={props.showProfile}/>
        <Messages />
        <WriteMessage />
        </Route>
        <Route>
          <SelectChatPage />
        </Route>
      </Switch>
    </div>
  );
}

export default Chat;
