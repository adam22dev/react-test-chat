import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterMessages } from '../../redux/ducks/messages';

function FilterMessages(props) {
  const filter = useSelector(state=>state.messages.filter)
  const dispatch = useDispatch()


  const handleFilterMessages = (event) => {
    dispatch(setFilterMessages(event.target.value))
  }




  return (
    <div>
      <input
        type="text"
        value={filter}
        onChange={handleFilterMessages}
      />
    </div>
  );
}

export default FilterMessages;