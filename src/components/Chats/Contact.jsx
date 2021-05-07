import React from 'react';
import styles from './chats.module.css';
import { NavLink } from 'react-router-dom';

function Contact (props) {
  return (
    <div className={styles['contact-card']}>
      <li className={styles['contact-names']}>
        <NavLink to={`/contact/${props.contact._id}`}>
          {props.contact.fullname}
        </NavLink>
        <div className={styles['contact-last-message']}></div>
      </li>
    </div>
  );
}

export default Contact;
