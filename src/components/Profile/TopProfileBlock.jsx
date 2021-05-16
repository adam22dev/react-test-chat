import React from 'react';
import styles from './profile.module.css';
import Avatar from '../App/Avatar';
import ContactInfo from './ContactInfo';
import ContactSocial from './ContactSocial';
import ContactMedia from './ContactMedia';
import PropTypes from 'prop-types';

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

TopProfileBlock.propTypes = {
  contact: PropTypes.object,
};

export default TopProfileBlock;
