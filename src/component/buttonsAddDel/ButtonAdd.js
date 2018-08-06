import React from 'react';
import PropTypes from 'prop-types';

function RowAdd(props) {
  const handlerClick = (ev) => {
    ev.preventDefault();
    props.updateData('add');
  };

  return (
    <td>
      <button type="button" id="theButton" onClick={handlerClick}>
        {' '}
            Add
        {' '}
      </button>
    </td>
  );
}
RowAdd.propTypes = {
  updateData: PropTypes.func,
};

export default RowAdd;
