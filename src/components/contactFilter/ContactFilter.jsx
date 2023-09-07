import css from './ContactFilter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeTextFilter } from 'redux/filterSlice';

export const ContactFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);
  const handleFilterChange = e => {
    const name = e.target.value;
    dispatch(changeTextFilter(name));
  };
  return (
    <input
      type="text"
      name="filter"
      value={filter}
      onChange={handleFilterChange}
      placeholder="Search contacts..."
      className={css.input}
    />
  );
};
