import style from '../profile.module.css';
function ConnectionUser() {
  return (
    <div className={style.iconuser}>
      <div className={style.litteicon}>Phone</div>
      <div className={style.litteicon}>Camera</div>
      <div className={style.litteicon}>Mail</div>
    </div>
  );
}
export default ConnectionUser;
