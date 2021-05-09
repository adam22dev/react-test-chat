import React from 'react';
import styles from './app.module.css';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
function Avatar(props) {
  return (
    <div
      className={`${styles.avatar}  ${props.online ? styles.mediumonline : styles[props.size]}`}
      style={{ margin: props.margin }}>
      1
    </div>
  );
}

Avatar.propTypes = {
  size: PropTypes.string.isRequired,
  margin: PropTypes.string,
  online: PropTypes.bool,
};

export default Avatar;
