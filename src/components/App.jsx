import css from './App.module.css';
import { AddContact } from './addContact/AddContact';
import { ContactList } from './contactList/ContactList';

export const App = () => {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <AddContact />
      <ContactList />
    </div>
  );
};
