import React from 'react';
import styles from './messages.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { application, messages } from '../../redux/ducks';
import MessageInfo from './MessageInfo';
import { setDeleteMessage } from '../../redux/ducks/messages';

function MessagesBlocks(props) {
  const profileId = useSelector((state) => state.application.profile._id);
  const toUserId = props.message.toUserId;
  const contactsId = props.contactsId;
  const dispatch =useDispatch()
  const messageId = props.message._id
  const message = useSelector(state=>state.messages.items)



  if (props.message.type === 'info') {
    return <MessageInfo content={props.message.content} />;
  }

  const handleDeleteMessage = () =>{
    dispatch(setDeleteMessage(messageId))
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
          <span className="material-icons"  onClick={handleDeleteMessage} >delete_outline</span>
        </div>
      </div>
    </div>
  );
}

export default MessagesBlocks;
