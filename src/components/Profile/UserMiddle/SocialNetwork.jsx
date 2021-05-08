import style from '../profile.module.css';

function SocialNetwork(props) {
  return (
    <div className={style.socialnetwork}>
      <ul className={style.networksettings}>
        <li className={style.mediaicons}>
          <div className={style.media}>
            <div>
              <span className="material-icons">facebook</span>
            </div>
            <div className={style.nameofsocial}>{props.prf.username}</div>
          </div>
        </li>
        <li className={style.mediaicons}>
          <div className={style.media}>
            <div>
              <span className="material-icons">pages</span>
            </div>
            <div className={style.nameofsocial}>{props.prf.username}</div>
          </div>
        </li>
        <li className={style.mediaicons}>
          <div className={style.media}>
            <div>
              <span className="material-icons">star</span>
            </div>
            <div className={style.nameofsocial}>{props.prf.username}</div>
          </div>
        </li>
      </ul>
    </div>
  );
}
export default SocialNetwork;
