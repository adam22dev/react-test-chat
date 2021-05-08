import React, { useEffect } from 'react';
import style from './profile.module.css';
import UserInfo from './UserTop/UserInfo';
import ConnectionUser from './UserTop/ConnectionUser';
import SocialMedia from './UserMiddle/SocialMedia';
import Media from './UserLow/Media';
import { loadProfile } from '../../redux/ducks/application';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { logger } from 'redux-logger/src';

function Profile(props) {
   const id = useParams().id
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadProfile());
  }, []);
  const profile = useSelector((state) => state.application.profile);
  const load = useSelector(state => state.application.loading)
  const users = useSelector(state => state.contacts.items)
  const SearchUsers = users.find((user) =>
    id === user._id
  )
  // console.log(SearchUsers);
  // if (SearchUsers === undefined) {
  //   return null;
  // }
  return (
        <div className={style.profile}>
          <UserInfo prf={profile}/>
          <ConnectionUser />
          <SocialMedia prf={profile}/>
          <Media />
        </div>
      )
    }


export default Profile;
