import React from 'react';
import styles from './messages.module.css';
import Avatar from '../App/Avatar';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

function InboxMessage(props) {
  const id = useParams().id;
  const contacts = useSelector((state) => state.contacts.items);
  const contact = contacts.find((contact) => contact._id === id);

  return (
    <div className={styles.generalBlockMessageIn}>
      <div className={styles.messageAvatar}>
        <Avatar size={'small'} online={false} contact={contact} />
      </div>
      <div className={styles.messageDesignIn}>
        <div className={styles.messageInText}>{props.content}</div>
      </div>
    </div>
  );
}

InboxMessage.propTypes = {
content: PropTypes.string.isRequired,
}

export default InboxMessage;
