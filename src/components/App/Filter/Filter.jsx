const Filter = ({ value, onChange }) => {
  return (
    <label>
      Find contacts by name
      <input value={value} onChange={onChange} />
    </label>
  );
};

export default Filter;
