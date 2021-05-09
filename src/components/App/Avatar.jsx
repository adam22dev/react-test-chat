import React from 'react';
import styles from './app.module.css';
import PropTypes from "prop-types"
import { useSelector } from 'react-redux';
function Avatar(props) {
  const prf = useSelector(state => state.application.profile)
  return (
    <div
      className={`${styles.avatar} ${styles[props.size]}`}
      style={{ margin: props.margin }}
    >
      {props.children}
      {/*{prf.fullname.substr[0]}*/}
      ERR
    </div>
  );
}

Avatar.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.string.isRequired,
  margin: PropTypes.string,
};

export default Avatar;