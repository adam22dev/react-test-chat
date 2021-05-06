import React, { useEffect } from 'react';
import styles from './chats.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { loadContacts } from '../../redux/ducks/contacts';
import Search from './Search';
import Skeleton from './Skeleton';
import Contact from './Contact';

function Chats(props) {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);
  const loading = useSelector((state) => state.contacts.loading);

  useEffect(() => {
    dispatch(loadContacts());
  }, []);

  return (
    <div className={styles.chats}>
      <div className={styles['contacts-search']}>
        <input />
        <Search />
      </div>

      <div className={styles['contacts-chats']}>
        {loading ? (
          <Skeleton />
        ) : (
          contacts.map((contact) => {
            return <Contact key={contact._id} contact={contact} />;
          })
        )}
      </div>
    </div>
  );
}

export default Chats;
