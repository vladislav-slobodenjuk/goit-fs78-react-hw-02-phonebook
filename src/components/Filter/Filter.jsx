import PropTypes from 'prop-types';

export default function Filter({ filterValue, onFilterChange }) {
  return (
    <input
      type="text"
      name="filter"
      value={filterValue}
      onChange={onFilterChange}
    />
  );
}

Filter.propTypes = {
  filterValue: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};
