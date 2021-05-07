import style from '../profile.module.css';
function ConnectionUser() {
  return (
    <div className={style.iconuser}>
      <div className={style.litteicon}>
        <span className="material-icons">call</span>
      </div>
      <div className={style.litteicon}>
        <span className="material-icons">videocam</span>
      </div>
      <div className={style.litteicon}>
        <span className="material-icons">email</span>
      </div>
    </div>
  );
}
export default ConnectionUser;
