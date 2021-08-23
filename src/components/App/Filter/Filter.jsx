import PropTypes from "prop-types";

const Filter = ({ value, onChange }) => {
  return (
    <label>
      Find contacts by name
      <input value={value} onChange={onChange} />
    </label>
  );
};

Filter.propTypes = { value: PropTypes.string, onChange: PropTypes.func };

export default Filter;
