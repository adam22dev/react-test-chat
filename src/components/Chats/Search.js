import React from 'react';
import styles from './chats.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { contacts } from '../../redux/ducks';
import { setSearchContact } from '../../redux/ducks/contacts';

function Search(props) {
//   const filter = useSelector((state) => state.contacts.filter);
//   const dispatch = useDispatch();
//   const handleSearchContact = (event) => {
//     dispatch(setSearchContact(event.target.value));
//   };
//
//   const filteredContacts = contacts.filter(
//     (contact) => contact.fullname.indexOf(filter) > -1,
//   );
//
  return (
    <div className={styles['contact-search']}>
{/*//       <input*/}
{/*//         type="text"*/}
{/*//         placeholder={'Search contact'}*/}
{/*//         value={filter}*/}
{/*//       onChange={handleSearchContact}/>*/}
    </div>
  );
}

export default Search;
