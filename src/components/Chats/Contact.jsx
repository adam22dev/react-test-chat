import React from 'react';
import styles from './chats.module.css';
import { NavLink } from 'react-router-dom';
import Avatar from '../App/Avatar';

function Contact(props) {
  const lastMessages = props.contact.lastMessage;

  return (
    <div className={styles['contact-card']}>
      <li className={styles['contact-names']}>
        <Avatar size="small" online={props.contact.online}></Avatar>
        <NavLink to={`/contact/${props.contact._id}`}>
          {props.contact.fullname}
        </NavLink>

        <div className={styles['contact-last-message']}>
          {lastMessages === undefined ? '' : lastMessages.content.substr(0, 30)}
        </div>
      </li>
    </div>
  );
}

export default Contact;
