import React from 'react';
import styles from './messages.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { sendMessage } from '../../redux/ducks/messages';
import { useParams } from 'react-router-dom';

function MessageWriteRightBlock(props) {
  const dispatch = useDispatch();
  const messageText = useSelector((state) => state.messages.messageText);
  const contactId = useParams().id;
  const myId = useSelector((state) => state.application.profile._id);

  const handleSendMessage = () => {
    dispatch(sendMessage(myId, contactId, messageText));
  };

  return (
    <div className={styles.messageWriteRightBlock}>
      <div className={styles.clip}>
        <span className="material-icons">attach_file</span>
      </div>
      <div className={styles.microphone}>
        {messageText === '' ? (
          <span className="material-icons">keyboard_voice</span>
        ) : (
          <span className="material-icons" onClick={handleSendMessage}>
            send
          </span>
        )}
      </div>
    </div>
  );
}

export default MessageWriteRightBlock;
