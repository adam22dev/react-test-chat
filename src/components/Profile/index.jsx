import React, { useEffect } from 'react';
import style from './profile.module.css';
import UserInfo from './UserTop/UserInfo';
import ConnectionUser from './UserTop/ConnectionUser';
import SocialMedia from './UserMiddle/SocialMedia';
import Media from './UserLow/Media';
import { loadProfile } from '../../redux/ducks/application';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';


function Profile(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadProfile());
  }, []);
  const users = useSelector((state) => state.contacts.items);
  const load = useSelector(state => state.application.loading)
  const id = useParams().id;
  const userFinded = users.find((user) => id === user._id);
  return (
    load ? "" :
        <div className={style.profile}>
          <UserInfo prf={users} />
          <ConnectionUser />
          <SocialMedia prf={users}/>
          <Media />
        </div>
      )
    }


export default Profile;
