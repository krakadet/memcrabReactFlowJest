import React from 'react';
import PropTypes from 'prop-types';

function HighlightNeighboursNumber(props) {
  const handleChange = (ev) => {
    ev.preventDefault();
    props.inputLightValue(ev.target.value);
  };
  const { value } = props;
  return (
    <label htmlFor="lightValue">
Input lighting number
      <input
        type="number"
        id="lightValue"
        placeholder="input near light value"
        value={value}
        onChange={handleChange}
      />
    </label>
  );
}

HighlightNeighboursNumber.propTypes = {
  inputLightValue: PropTypes.func,
  value: PropTypes.number,
};

export default HighlightNeighboursNumber;
