import React from 'react';
import styles from './messages.module.css'
import { useDispatch, useSelector } from 'react-redux';

function MessageSendForm(props) {
  const messageText = useSelector(state=>state.messages.messageText)
  const dispatch = useDispatch()

  console.log(messageText)

  const handleChange = () =>{
    dispatch()
  }

  return (
    <div className={styles.messageSendForm} >
      <input
        type='text'
        placeholder='Write a message'
        value={messageText}
        onChange={handleChange}
      />
    </div>
  );
}

export default MessageSendForm;
