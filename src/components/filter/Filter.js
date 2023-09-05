import React from 'react';
import PropTypes from 'prop-types';
import css from './Filter.module.css';

export function Filter({ filter, onFilterChange }) {
  return (
    <input
      type="text"
      name="filter"
      value={filter}
      onChange={onFilterChange}
      placeholder="Search contacts..."
      className={css.input}
    />
  );
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

export default Filter;
