import React from 'react';
import styles from './profile.module.css';
import Avatar from '../App/Avatar';
import ContactInfo from './ContactInfo';
import ContactSocial from './ContactSocial';
import ContactMedia from './ContactMedia';

function TopProfileBlock(props) {
  return (
    <div className={styles.TopProfileBlock}>
      <Avatar size={'large'} online={false} contact={props.contact} />
      <ContactInfo contact={props.contact} />
      <ContactSocial contact={props.contact} />
      <ContactMedia />
    </div>
  );
}

export default TopProfileBlock;
