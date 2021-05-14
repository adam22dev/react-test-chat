import React from 'react';
import styles from './profile.module.css';
import ContactInfoIcons from './ContactInfoIcons';
function ContactInfo(props) {
  return (
    <div>
      <div className={styles.ContactInfoTitle}>{props.contact.fullname}</div>
      <div className={styles.ContactInfoUsername}>
        @{props.contact.username}
      </div>
      <ContactInfoIcons />
    </div>
  );
}

export default ContactInfo;
