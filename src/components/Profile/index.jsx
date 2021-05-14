import React from 'react';
import { useSelector } from 'react-redux';
import styles from './profile.module.css';
import { Route } from 'react-router-dom';
import ContactsContent from './ContactsContent';

function Profile() {
  const load = useSelector((state) => state.application.loading);
  return load ? (
    'Идёт подгрузка данных'
  ) : (
    <div className={styles.profile}>
      <Route exact path="/contact/:id?">
        <ContactsContent />
      </Route>
    </div>
  );
}

export default Profile;
