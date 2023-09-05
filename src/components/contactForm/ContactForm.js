import React from 'react';
import css from '../contactForm/ContactForm.module.css';
import PropTypes from 'prop-types';

function ContactForm({
  name,
  number,
  nameError,
  numberError,
  onNameChange,
  onNumberChange,
  onFormSubmit,
}) {
  return (
    <form className={css.form} onSubmit={onFormSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={onNameChange}
          required
        />
        {nameError && <p className={css.error}>{nameError}</p>}
      </label>
      <label>
        Phone number:
        <input
          type="tel"
          name="number"
          value={number}
          onChange={onNumberChange}
          required
        />
        {numberError && <p className={css.error}>{numberError}</p>}
      </label>
      <button type="submit">Add Contact</button>
    </form>
  );
}

ContactForm.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  nameError: PropTypes.string,
  numberError: PropTypes.string,
  onNameChange: PropTypes.func.isRequired,
  onNumberChange: PropTypes.func.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
