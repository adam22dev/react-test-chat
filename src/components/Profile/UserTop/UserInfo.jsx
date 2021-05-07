import style from '../profile.module.css';
function UserInfo(props) {
  return (
      <div className={style.userinfo}>
        <div className={style.avatar}>?</div>
        <div className={style.fullname}>{props.prf.fullname}</div>
        <div className={style.username}>@{props.prf.username}</div>
      </div>
  );
}
export default UserInfo;
