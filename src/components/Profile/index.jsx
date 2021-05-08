import React, { useEffect } from 'react';
import style from './profile.module.css';
import UserInfo from './UserTop/UserInfo';
import ConnectionUser from './UserTop/ConnectionUser';
import SocialMedia from './UserMiddle/SocialMedia';
import Media from './UserLow/Media';
import { loadProfile } from '../../redux/ducks/application';
import { useDispatch, useSelector } from 'react-redux';
import { logger } from 'redux-logger/src';

function Profile(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadProfile());
  }, []);
  const profile = useSelector((state) => state.application.profile);
  const load = useSelector(state => state.application.loading)


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
//КОД НЕ ДЕЙСВУЕТ
//return (
//    (load ? ("ТУТ ДОЛЖЕН БЫТЬ СКЕЛЕТ") :  (profile.map(prf => {
//     return (
//       <div className={style.profile}>
//         <UserInfo prf={prf}/>
//         <ConnectionUser />
//         <SocialMedia prf={prf}/>
//         <Media />
//       </div>
//     )
//   })
// )));