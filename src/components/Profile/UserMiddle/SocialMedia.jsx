import style from '../profile.module.css';
import SocialNetwork from './SocialNetwork';
function SocialMedia(props) {
  return (
    <div className={style.socialmedia}>
      <span className={style.heading}>Social</span>
      <SocialNetwork prf={props.prf} />
    </div>
  );
}
export default SocialMedia;
