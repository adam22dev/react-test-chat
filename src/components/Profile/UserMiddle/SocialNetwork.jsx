import style from '../profile.module.css';

function SocialNetwork(props) {
  return (
    <div className={style.socialnetwork}>
      <ul>
        <li>
          <div className={style.media}>
            <div>
              <span className="material-icons">facebook</span>
            </div>
            <div className={style.nameofsocial}>{props.prf.username}</div>
          </div>
        </li>
        <li>
          <div className={style.media}>
            <div>
              <span className="material-icons">pages</span>
            </div>
            <div className={style.nameofsocial}>{props.prf.username}</div>
          </div>
        </li>
        <li>
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
