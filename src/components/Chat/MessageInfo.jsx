import React from 'react';
import styles from './messages.module.css';

function MessageInfo(props) {
  return <div className={styles.messageDesign}>{props.content}</div>;
}

export default MessageInfo;
