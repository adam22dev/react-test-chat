import React from 'react';
import styles from './messages.module.css'

function SelectChatPage(props) {
  return (
    <div className={styles.noSelectedChat}>
    <div className={styles.chatNan}>
      Please, select a chat to start messaging
    </div>
    </div>
  );
}

export default SelectChatPage;