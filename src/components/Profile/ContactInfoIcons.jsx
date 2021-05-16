import React from 'react';
import styles from './profile.module.css';

function ContactInfoIcons() {
  return (
    <div className={styles.ContactInfoIcons}>
      <span className="material-icons">phone</span>
      <span className="material-icons">videocam</span>
      <span className="material-icons">email</span>
    </div>
  );
}

export default ContactInfoIcons;
