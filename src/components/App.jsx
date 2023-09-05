import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './contactForm/ContactForm';
import ContactList from './contactList/ContactList';
import Filter from './filter/Filter';
import css from './App.module.css';

export function App() {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [nameError, setNameError] = useState('');
  const [numberError, setNumberError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      setContacts(JSON.parse(storedContacts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const validateName = name => /^[A-Za-z\s.'-]+$/.test(name);
  const validateNumber = number => /^[+]?[0-9\s-]+$/.test(number);

  const handleNameChange = event => {
    const name = event.target.value;
    setName(name);
    setNameError('');
  };

  const handleNumberChange = event => {
    const number = event.target.value;
    setNumber(number);
    setNumberError('');
  };
  const showSuccessMessage = message => {
    setSuccessMessage(message);
    setTimeout(() => {
      setSuccessMessage('');
    }, 3000);
  };

  const handleFormSubmit = event => {
    event.preventDefault();

    if (!validateName(name)) {
      setNameError('Invalid name format');
      return;
    }

    if (!validateNumber(number)) {
      setNumberError('Invalid number format');
      return;
    }

    if (isContactAlreadyExists(name)) {
      setNameError('Contact already exists');
      return;
    }

    setNameError('');
    setNumberError('');
    showSuccessMessage('Contact added successfully!');

    const newContact = { id: nanoid(), name, number };
    setContacts([...contacts, newContact]);
    setName('');
    setNumber('');
  };

  const isContactAlreadyExists = name =>
    contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase());

  const handleFilterChange = event => {
    setFilter(event.target.value);
  };

  const handleContactDelete = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
  };

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm
        name={name}
        number={number}
        nameError={nameError}
        numberError={numberError}
        onNameChange={handleNameChange}
        onNumberChange={handleNumberChange}
        onFormSubmit={handleFormSubmit}
      />
      <h2 className={css.subtitle}>Contacts</h2>
      <Filter filter={filter} onFilterChange={handleFilterChange} />
      {successMessage && <p className={css.successMessage}>{successMessage}</p>}
      <ContactList
        contacts={contacts}
        filter={filter}
        onContactDelete={handleContactDelete}
      />
    </div>
  );
}

export default App;
