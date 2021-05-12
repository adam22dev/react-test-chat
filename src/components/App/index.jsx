import React, { useEffect, useState } from 'react';
import Chats from '../Chats';
import Messages from '../Messages';
import styles from './app.module.css';
import Profile from '../Profile';
import { CSSTransition } from 'react-transition-group';
import { loadProfile } from '../../redux/ducks/application';
import { useDispatch } from 'react-redux';


function App(props) {
  const [showProfile,setShowProfile] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadProfile());
  }, [dispatch]);


  return (
    <div className={styles.container} >
      <Chats />
       <Messages setShowProfile={setShowProfile} showProfile={showProfile}/>
       <CSSTransition
         in={showProfile}
         unmountOnExit
         timeout={500}
       >
         <Profile />
       </CSSTransition>
    </div>
  );
}

export default App;
