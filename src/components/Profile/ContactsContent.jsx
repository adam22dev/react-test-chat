import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import TopProfileBlock from './TopProfileBlock';

function ContactsContent() {
  const contacts = useSelector((state) => state.contacts.items);
  const id = useParams().id;
  const filteredContacts = contacts.filter((contact) => contact._id === id);

  console.log(filteredContacts);

  return (
    <div>
      {filteredContacts.map((contact) => {
        return <TopProfileBlock contact={contact} />;
      })}
    </div>
  );
}

export default ContactsContent;
