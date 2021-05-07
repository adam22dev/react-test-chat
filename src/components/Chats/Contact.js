import React from 'react';
import styles from './chats.module.css';

function Contact(props) {
  return (
    <div className={styles['contact-card']}>
      <div className={styles['contact-names']}>{props.contact.fullname}</div>
    </div>
  );
}

export default Contact;
