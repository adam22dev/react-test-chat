import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterMessages } from '../../redux/ducks/messages';
import styles from './messages.module.css';

function FilterMessages(props) {
  const filter = useSelector((state) => state.messages.filter);
  const dispatch = useDispatch();

  const handleFilterMessages = (event) => {
    dispatch(setFilterMessages(event.target.value));
  };

  return (
    <div className={styles.messageSearch}>
      <span className="material-icons">search</span>
    <div>
      <input type="text" value={filter} onChange={handleFilterMessages} />
    </div>
    </div>
  );
}

export default FilterMessages;
