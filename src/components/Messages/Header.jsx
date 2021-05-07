import React from 'react';
import styles from './messages.module.css';
import { useSelector } from 'react-redux';
import { application, contacts } from '../../redux/ducks';

function Header(props) {
  const profile = useSelector((state) => state.application.profile);
  const profileId = useSelector((state) => state.application.profile._id);
  const contacts = useSelector((state) => state.contacts.items);
  const contactsId = useSelector((state) => state.contacts.items._id);
  const loadingMessages = useSelector((state) => state.messages.loading);

  if (loadingMessages) {
    return (
      <div className={styles.headerLoading}>
        <span className="material-icons">cached</span>
        <div>Loading...</div>
      </div>
    );
  }

  return (
    <div className={styles.header}>
      <div className={styles['header-center-block']}>
        <div className={styles.messageSearch}>
          <span className="material-icons">search</span>
          <input type="text" />
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
