import React from 'react';
import styles from './messages.module.css'
import { useSelector } from 'react-redux';

function MessageSendForm(props) {



  return (
    <div className={styles.messageSendForm} >
      <input
        type='text'
        placeholder='Write a message'


      />
    </div>
  );
}

export default MessageSendForm;
