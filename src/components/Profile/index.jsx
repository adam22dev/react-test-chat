import React, { useEffect } from 'react';
import style from './profile.module.css';
import UserInfo from './UserTop/UserInfo';
import ConnectionUser from './UserTop/ConnectionUser';
import SocialMedia from './UserMiddle/SocialMedia';
import Media from './UserLow/Media';
import { loadProfile } from '../../redux/ducks/application';
import { useDispatch, useSelector } from 'react-redux';

function Profile(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadProfile());
  }, []);
  const prf = useSelector((state) => state.profile);//ПРОБЛЕМА
  return (
    <div className={style.profile}>
      <UserInfo />
      <ConnectionUser />
      <SocialMedia />
      <Media />
    </div>
  );
}

export default Profile;
