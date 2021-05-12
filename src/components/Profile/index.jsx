import React, { useEffect } from 'react';
import UserInfo from './UserTop/UserInfo';
import ConnectionUser from './UserTop/ConnectionUser';
import SocialMedia from './UserMiddle/SocialMedia';
import Media from './UserLow/Media';
import { loadProfile } from '../../redux/ducks/application';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styles from './profile.module.css'

function Profile(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProfile());
  }, []);

  const users = useSelector((state) => state.application.profile);
  const load = useSelector((state) => state.application.loading);
  const id = useParams().id;
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
