import React from 'react';
import PropTypes from 'prop-types';

function InputRow(props) {
  const handleChange = (ev) => {
    ev.preventDefault();
    props.inputRowValue(ev.target.value);
  };
  const { value } = props;
  return (
    <label htmlFor="row">
      Inset row
      <input
        type="number"
        id="row"
        placeholder="input row"
        value={value}
        onChange={handleChange}
      />
    </label>
  );
}

InputRow.propTypes = {
  inputRowValue: PropTypes.func,
  value: PropTypes.number,
};

export default InputRow;
