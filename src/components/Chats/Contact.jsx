
import React from 'react';
import styles from './chats.module.css';
import { NavLink } from 'react-router-dom';

function Contact(props) {
  const lastMessages = props.contact.lastMessage;

  return (
    <li className={styles['contact-chat']}>
      <div className={styles['contact-avatar']}>ava</div>

      <NavLink to={`/contact/${props.contact._id}`}>
        <div className={styles['contact-names']}>
          <div className={styles['contact-name']}>{props.contact.fullname}</div>

          <div className={styles['contact-last-message']}>
            {lastMessages === undefined
              ? ''
              : lastMessages.content.substr(0, 30)}
          </div>
        </div>
      </NavLink>
    </li>
  );
}

export default Contact;