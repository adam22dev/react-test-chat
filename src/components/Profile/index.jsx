import React from 'react';
import { useSelector } from 'react-redux';
import styles from './profile.module.css';
import { Route } from 'react-router-dom';
import ContactsContent from './ContactsContent';
import { CSSTransition } from 'react-transition-group';

function Profile(props) {
  const load = useSelector((state) => state.application.loading);
  return load ? (
    'Идёт подгрузка данных'
  ) : (
    <CSSTransition in={props.showProfile} unmountOnExit timeout={500}>
      <div className={styles.profile}>
        <Route exact path="/contact/:id?">
          <ContactsContent />
        </Route>
      </div>
    </CSSTransition>
  );
}

export default Profile;
