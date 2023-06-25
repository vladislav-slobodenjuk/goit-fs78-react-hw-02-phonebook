import PropTypes from 'prop-types';
import ListItem from './ListItem/ListItem';

export default function ContactList({ contacts, onDeleteClick }) {
  return (
    <ul>
      {contacts.map(contact => (
        <ListItem
          key={contact.id}
          contact={contact}
          onDeleteClick={onDeleteClick}
        />
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};
