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

export default ContactList;
