import React from 'react';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { Contact } from '../contact/Contact';
import { NoContacts } from 'components/noContacts/NoContacts';
import { ContactFilter } from '../contactFilter/ContactFilter';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filters.textFilter.toLowerCase());
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );
  return (
    <div>
      <h2 className={css.subtitle}>Contacts</h2>
      <ContactFilter />
      {filteredContacts.length === 0 && <NoContacts />}
      <ul className={css.list}>
        {filteredContacts.length > 0 &&
          filteredContacts.map(c => <Contact key={c.id} contact={c} />)}
      </ul>
    </div>
  );
};
