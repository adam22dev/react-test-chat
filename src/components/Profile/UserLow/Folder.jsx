import style from '../profile.module.css';
function Folder() {
  return (
    <div className={style.folders}>
          <div className={style.medialow}>
            <div className={style.folder}>
              <div className={style.follow}></div>
            </div>
            <div className={style.nameofsocial}>
              <span>folder</span>
            </div>
          </div>
    </div>
  );
}
export default Folder;
