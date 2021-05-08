import React from 'react';
import styles from './messages.module.css';
import { useSelector } from 'react-redux';
import { application, messages } from '../../redux/ducks';
import MessageInfo from './MessageInfo';

function MessagesBlocks(props) {
  const profileId = useSelector((state) => state.application.profile._id);
  const toUserId = props.message.toUserId;
  const contactsId = props.contactsId;
  if (props.message.type === 'info') {
    return <MessageInfo content={props.message.content} />;
  }

  return (
    <div>
      <div
        className={
          toUserId === profileId
            ? styles.messageDesignIn
            : styles.messageDesignOut
        }
      >
        {props.message.content}
        <div className={styles.deleteButton}>
          <span className="material-icons">delete_outline</span>
        </div>
      </div>
    </div>
  );
}

export default MessagesBlocks;
