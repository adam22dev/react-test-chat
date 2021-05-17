import React from 'react';
import styles from './messages.module.css';
import PropTypes from 'prop-types';
import InboxMessage from './InboxMessage';

function MessageInfo(props) {
  return <div className={styles.messageDesign}>{props.content}</div>;
}

MessageInfo.propTypes = {
  content: PropTypes.string.isRequired,
}

export default MessageInfo;
