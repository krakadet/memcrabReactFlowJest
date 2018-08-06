import React from 'react';
import PropTypes from 'prop-types';

function InputColumn(props) {
  const handleChange = (ev) => {
    ev.preventDefault();
    props.inputColumnValue(ev.target.value);
  };
  const { value } = props;
  return (
    <label htmlFor="column">
Inset column
      <input
        type="number"
        id="column"
        placeholder="input column"
        value={value}
        onChange={handleChange}
      />
    </label>
  );
}
InputColumn.propTypes = {
  inputColumnValue: PropTypes.func,
  value: PropTypes.number,
};

export default InputColumn;
