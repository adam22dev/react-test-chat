import style from '../profile.module.css';
function Folder() {
  return (
    <div className={style.folders}>
      <ul>
        <li>
          <div className={style.media}>
            <div className={style.folder}>
              <span className="material-icons">folder</span>
            </div>
            <div className={style.nameofsocial}>
              <span>name for folder</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
export default Folder;
