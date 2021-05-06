import style from '../profile.module.css';
import Folder from './Folder';
function Media () {
  return (
    <div>
      <span className={style.heading}>
      Media
    </span>
      <Folder/>
    </div>
  )
}
export default Media