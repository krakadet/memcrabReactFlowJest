import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { getIdRow } from '../../helpers/lightNumbersHelpers';

function CellSumRow(props) {
  const handleMouseEnter = (event) => {
    event.preventDefault();
    const row = getIdRow(event);
    props.percentDisplay(row);
  };

  const handleMouseLeave = (event) => {
    event.preventDefault();
    props.percentDisplay(null);
  };

  const {
    indexParentRow,
    sumAllCellRow,
  } = props;
  return (
    <td
      id={classNames(`sumCell_${indexParentRow}`)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {sumAllCellRow}
    </td>
  );
}

CellSumRow.propTypes = {
  indexParentRow: PropTypes.number,
  percentDisplay: PropTypes.number,
  sumAllCellRow: PropTypes.number,
};

export default CellSumRow;