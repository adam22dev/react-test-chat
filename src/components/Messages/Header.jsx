import React from 'react';
import styles from './messages.module.css';

function Header(props) {
  return (
    <div className={styles.header}>
      <div className={styles['header-center-block']}>
        <div className={styles.messageSearch}>
          <span className="material-icons">search</span>
          <input type='text' />
        </div>
        <div className={styles.messageAuthorName}>
          <div className={styles.messageAuthorNameTitle}>Deni Naurkhanov</div>
          <div className={styles.messageAuthorNameOnline}>
            <span className="material-icons">circle</span>
          </div>
        </div>
        <div className={styles.messageSettings}>
          <span className="material-icons">settings</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
