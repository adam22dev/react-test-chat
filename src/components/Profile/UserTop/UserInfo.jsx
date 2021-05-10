import style from '../profile.module.css';
import Avatar from '../../App/Avatar';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
function UserInfo(props) {
  console.log(props.prf.username);
  return (

    <div className={style.userinfo}>
      <div className={style.avatar}>
        <Avatar size="merge" margin={0}></Avatar>
      </div>
      <div className={style.fullname}>{props.prf.fullname}</div>
      <div className={style.username}>@{props.prf.username}</div>
    </div>
  );
}
export default UserInfo;
