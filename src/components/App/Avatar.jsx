import React from 'react';
import styles from './app.module.css';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

function Avatar(props) {
  const load = useSelector((state) => state.application.loading);

  return load ? (
    ''
  ) : (
    <div
      className={`${styles.avatar}  ${
        props.online ? styles.mediumonline : styles[props.size]
      }`}
      style={{ margin: props.margin, width: props.width, height: props.height }}
    >
      D
    </div>
  );
}

Avatar.propTypes = {
  size: PropTypes.string.isRequired,
  margin: PropTypes.string,
  online: PropTypes.bool,
  width: PropTypes.string,
  height: PropTypes.string,
};

export default Avatar;
