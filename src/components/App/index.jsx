import React, { useState } from 'react';
import Chats from '../Chats';
import Messages from '../Messages';
import styles from './app.module.css';
import Profile from '../Profile';
import { Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

function App(props) {
  const [showProfile,setShowProfile] = useState(false)

  console.log(showProfile)

  return (
    <div className={styles.container} >
      <Chats />
       <Messages setShowProfile={setShowProfile} showProfile={showProfile}/>
       <CSSTransition
         in={showProfile}
         unmountOnExit
         timeout={500}
         className="profile"
       >
         <Profile />
       </CSSTransition>
    </div>


  );
}

export default App;
