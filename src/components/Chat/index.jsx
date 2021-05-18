import React from 'react';
import styles from './messages.module.css';
import Header from './Header';
import Messages from './Messages';
import WriteMessage from './WriteMessage';

function Chat(props) {
  return (
    <div className={styles.messages}>
                <Header
            setShowProfile={props.setShowProfile}
            showProfile={props.showProfile}
          />
          <Messages />
          <WriteMessage />
          </div>
  );
}

export default Chat;
