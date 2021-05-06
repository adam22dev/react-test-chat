import React from 'react';
import styles from './messages.module.css';

function MessageWriteRightBlock(props) {
  return (
    <div className={styles.messageWriteRightBlock}>
      <div className={styles.clip}>
        <span className="material-icons">attach_file</span>
      </div>
      <div className={styles.microphone}>
        <span className="material-icons">mic</span>
      </div>
    </div>
  );
}

export default MessageWriteRightBlock;
