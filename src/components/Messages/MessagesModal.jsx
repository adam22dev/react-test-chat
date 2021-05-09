import React, { useEffect } from 'react';
import styles from './messages.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { loadMessages } from '../../redux/ducks/messages';
import { messages } from '../../redux/ducks';
import MessagesBlocks from './MessagesBlocks';
import { useParams } from 'react-router-dom';

function MessagesModal(props) {
  const dispatch = useDispatch()
  const messages = useSelector(state=>state.messages.items)
  const contactsId = useParams().id
  const filter = useSelector(state=>state.messages.filter)



  useEffect(()=>{
    dispatch(loadMessages(contactsId))
  },[contactsId])

  const filteredMessages = messages
    .filter(messages=>messages.content.toUpperCase().indexOf(filter.toUpperCase())>-1)

  return (
    <div className={styles.messagesModal}>
      {filteredMessages.map((item)=>{
        return <MessagesBlocks message={item} contactsId={props.idContacts} key={item._id} />
      })}
    </div>
  );
}

export default MessagesModal;
