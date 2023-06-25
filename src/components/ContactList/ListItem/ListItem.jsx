import PropTypes from 'prop-types';

export default function ListItem({ name, number, onDeleteClick }) {
  return (
    <li>
      <p>
        {name}: {number}
      </p>
      <button
        type="button"
        // onClick={onDeleteClick}
      >
        Delete
      </button>
    </li>
  );
}

ListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  // onDeleteClick: PropTypes.func.isRequired,
};
