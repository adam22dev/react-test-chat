import React from 'react';
import styles from './messages.module.css';
import { useDispatch, useSelector } from 'react-redux';
import MessageInfo from './MessageInfo';
import { setDeleteMessage } from '../../redux/ducks/messages';
import Avatar from '../App/Avatar';

function MessagesBlocks(props) {
  const profileId = useSelector((state) => state.application.profile._id);
  const toUserId = props.message.toUserId;
  const dispatch = useDispatch();
  const messageId = props.message._id;
  const readMessage = props.message.read;
  const timeSendMessage = props.message.time;

  if (props.message.type === 'info') {
    return <MessageInfo content={props.message.content} />;
  }

  const handleDeleteMessage = () => {
    dispatch(setDeleteMessage(messageId));
  };

  return (
    <div>
      {toUserId === profileId ? (
        <div className={styles.generalBlockMessageIn}>
          <div className={styles.messageAvatar}>
           <Avatar size={'small'} />
          </div>
          <div className={styles.messageDesignIn}>
            <div className={styles.messageInText}>{props.message.content}</div>
          </div>
        </div>
      ) : (
        <div>
          <div className={styles.messageDesignOut}>
            <div className={styles.messageOutText}>{props.message.content}</div>
            <div className={styles.messageTime}>
              {timeSendMessage.substr(11, 5)}
            </div>
            <div className={styles.messageRead}>
              {readMessage === true ? (
                <div>
                  <span className="material-icons">done_all</span>
                </div>
              ) : (
                <div>
                <span className="material-icons">check</span>
                </div>
              )}
            </div>
            <div className={styles.deleteButton} onClick={handleDeleteMessage}>
              <span className="material-icons">clear</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MessagesBlocks;
