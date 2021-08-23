import PropTypes from "prop-types";

const ContactList = ({ contacts, onDelete }) => {
  const handleDelete = (e) => {
    onDelete(e.target.id);
  };
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          {name} {number}
          <button type="button" id={id} onClick={handleDelete}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  onDelete: PropTypes.func,
};

export default ContactList;
