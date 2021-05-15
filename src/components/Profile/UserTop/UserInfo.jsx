import style from '../profile.module.css';
import Avatar from '../../App/Avatar';
function UserInfo(props) {
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
