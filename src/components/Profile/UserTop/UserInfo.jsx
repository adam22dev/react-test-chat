import style from '../profile.module.css';
function UserInfo() {
  return (
    <div className={style.userinfo}>
      <div className={style.avatar}>AVATAR</div>
      <div className={style.username}>@username</div>
    </div>
  );
}
export default UserInfo;
