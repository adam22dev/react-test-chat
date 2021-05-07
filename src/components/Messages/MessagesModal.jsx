import React, { useEffect } from 'react';
import styles from './messages.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { loadMessages } from '../../redux/ducks/messages';
import { messages } from '../../redux/ducks';
import MessagesBlocks from './MessagesBlocks';

function MessagesModal(props) {
  const dispatch = useDispatch()
  const messages = useSelector(state=>state.messages.items)

  console.log(messages)

  useEffect(()=>{
    dispatch(loadMessages())
  },[])

  return (
    <div className={styles.messagesModal}>
      {messages.map((item)=>{
        return <MessagesBlocks message={item} />
      })}
    </div>
  );
}

export default MessagesModal;
