import style from '../profile.module.css';
import SocialNetwork from './SocialNetwork';
function SocialMedia() {
  return <div className={style.socialmedia}>
    <span className={style.heading}>
      Social
    </span>
    <SocialNetwork/>

  </div>;
}
export default SocialMedia
