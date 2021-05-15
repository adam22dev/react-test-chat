import React from 'react';
import UserInfo from './UserTop/UserInfo';
import ConnectionUser from './UserTop/ConnectionUser';
import SocialMedia from './UserMiddle/SocialMedia';
import Media from './UserLow/Media';
import { useSelector } from 'react-redux';
import styles from './profile.module.css';

function Profile(props) {
  const users = useSelector((state) => state.application.profile);
  const load = useSelector((state) => state.application.loading);
  return load ? (
    ''
  ) : (
    <div className={styles.profile}>
      <div>
        <UserInfo prf={users} />
        <ConnectionUser />
        <SocialMedia prf={users} />
        <Media />
      </div>
    </div>
  );
}

export default Profile;
