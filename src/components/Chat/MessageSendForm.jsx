import React from 'react';
import styles from './messages.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setMessageText } from '../../redux/ducks/messages';

function MessageSendForm(props) {
  const messageText = useSelector((state) => state.messages.messageText);
  const dispatch = useDispatch();
  const handleChange = (event) => {
    dispatch(setMessageText(event.target.value));
  };

  return (
    <div className={styles.messageSendForm}>
      <input
        type="text"
        placeholder="Write a message"
        value={messageText}
        onChange={handleChange}
      />
    </div>
  );
}

export default MessageSendForm;
