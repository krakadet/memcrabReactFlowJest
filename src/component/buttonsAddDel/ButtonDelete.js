import React from 'react';
import PropTypes from 'prop-types';

function RowDelete(props) {
  const handlerClick = (ev) => {
    ev.preventDefault();
    props.updateData();
  };
  return (
    <td>
      <button type="button" id="theButton" onClick={handlerClick}>
        {' '}
Delete
        {' '}
      </button>
    </td>
  );
}
RowDelete.propTypes = {
  updateData: PropTypes.func,
};

export default RowDelete;
