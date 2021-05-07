import React from 'react';
import styles from './messages.module.css'
import { useSelector } from 'react-redux';
import { application, messages } from '../../redux/ducks';
import MessageInfo from './MessageInfo';


function MessagesBlocks(props) {
  const profileId= useSelector(state=>state.application.profile._id)
  const toUserId = props.message.toUserId


  if (props.message.type === 'info'){
    return (
        <MessageInfo content={props.message.content} />
    )
  }


  return (
    <div>
      <div className={profileId === toUserId ?  styles.messageDesignIn : styles.messageDesignOut}>
        {props.message.content}
      </div>
    </div>
  );
}

export default MessagesBlocks;