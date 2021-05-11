import React from 'react';
import styles from './messages.module.css'
import Header from './Header';
import MessagesModal from './MessagesModal';
import WriteMessage from './WriteMessage';
import { Route, Switch } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import SelectChatPage from './SelectChatPage';

function Messages(props) {



  return (
    <div className={styles.messages}>
      <Switch>
        <Route path="/contact/:id?">
        <Header  setShowProfile={props.setShowProfile} showProfile={props.showProfile}/>
        <MessagesModal  />
        <WriteMessage  />
        </Route>
        <Route>
          <SelectChatPage />
        </Route>
      </Switch>
    </div>
  );
}

export default Messages;
