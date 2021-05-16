import React from 'react';
import styles from './profile.module.css';
import ContactInfoIcons from './ContactInfoIcons';
import PropTypes from 'prop-types';

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

ContactInfo.propTypes = {
  contact: PropTypes.object,
  username: PropTypes.string,
};

export default ContactInfo;
