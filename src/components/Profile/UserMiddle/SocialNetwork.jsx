import style from '../profile.module.css';

function SocialNetwork(props) {
  return (
    <div className={style.socialnetwork}>
      <div className={style.networksettings}>
        <li className={style.mediaicons}>
          <div className={style.media}>
            <div>
              <span className="material-icons">facebook</span>
            </div>
            <div className={style.nameofsocial}>{props.prf.username}</div>
          </div>
        </li>
        <div className={style.mediaicons}>
          <div className={style.media}>
            <div>
              <span className="material-icons">pages</span>
            </div>
            <div className={style.nameofsocial}>{props.prf.username}</div>
          </div>
        </div>
        <div className={style.mediaicons}>
          <div className={style.media}>
            <div>
              <span className="material-icons">star</span>
            </div>
            <div className={style.nameofsocial}>{props.prf.username}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SocialNetwork;
