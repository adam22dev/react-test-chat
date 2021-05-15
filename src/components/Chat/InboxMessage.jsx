import React from 'react';
import styles from './messages.module.css';
import Avatar from '../App/Avatar';

function InboxMessage(props) {
  return (
    <div className={styles.generalBlockMessageIn}>
      <div className={styles.messageAvatar}>
        <Avatar size={'small'} />
      </div>
      <div className={styles.messageDesignIn}>
        <div className={styles.messageInText}>{props.content}</div>
      </div>
    </div>
  );
}

export default InboxMessage;
