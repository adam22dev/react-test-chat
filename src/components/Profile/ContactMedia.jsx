import React from 'react';
import styles from './profile.module.css';

function ContactMedia(props) {
  return (
    <div className={styles.ContactMedia}>
      <div className={styles.ContactMediaTitle}>Media</div>
      <div className={styles.ContactMediaElements}>
        <div className={styles.ContactMediaDoc}></div>
        <div className={styles.ContactMediaSubtitle}>desktop-chat.pdf</div>
      </div>
    </div>
  );
}

export default ContactMedia;
