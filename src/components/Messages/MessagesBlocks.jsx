import React from 'react';
import styles from './messages.module.css'


function MessagesBlocks(props) {
  return (
    <div>
      <div className={styles.messageDesign}>
        {props.message.content}
      </div>
    </div>
  );
}

export default MessagesBlocks;