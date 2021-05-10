
import React from 'react';
import styles from './chats.module.css';
import { NavLink } from 'react-router-dom';
import Avatar from '../App/Avatar';
import * as dayjs from 'dayjs';

function Contact (props) {
  const lastMessages = props.contact.lastMessage;

  return (
    <li className={styles['contact-chat']}>
      <div className={styles['contact-avatar']}>
        <Avatar size='medium' />
      </div>
      <NavLink to={`/contact/${props.contact._id}`}>
        <div className={styles['contact-names']}>
          <div className={styles['contact-name']}>{props.contact.fullname}</div>

          <div className={styles['contact-last-message']}>
            {lastMessages === undefined
              ? ''
              : lastMessages.content.substr(0, 20) + '...'}
          </div>
        </div>
      </NavLink>
      <div className={styles['contact-message-time']}>
        {dayjs(lastMessages?.time).format('HH:mm')}
      </div>
    </li>
  );
}

export default Contact;