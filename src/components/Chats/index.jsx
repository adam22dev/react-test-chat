import React, { useEffect } from 'react';
import styles from './chats.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { loadContacts } from '../../redux/ducks/contacts';
import Search from './Search';
import Skeleton from './Skeleton';
import Contact from './Contact';
import { contacts } from '../../redux/ducks';

function Chats(props) {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);
  const loading = useSelector((state) => state.contacts.loading);
  const filter = useSelector((state) => state.contacts.filter);

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.fullname.toUpperCase().indexOf(filter.toUpperCase()) > -1,
  );

  useEffect(() => {
    dispatch(loadContacts());
  }, []);

  return (
    <div className={styles.chats}>
      <div className={styles['contacts-search']}>
        <Search />
      </div>

      <div className={styles['contacts-chats']}>
        <ul>
          {loading ? (
            <Skeleton />
          ) : (
            filteredContacts.map((contact) => {
              return <Contact key={contact._id} contact={contact} />;
            })
          )}
        </ul>
      </div>
    </div>
  );
}

export default Chats;
