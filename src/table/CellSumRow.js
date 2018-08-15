// @flow
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const getIdRow = event => event.currentTarget.parentNode.id;

type Props = {
  indexParentRow: number,
  percentDisplay: (?number) => void,
  sumAllCellRow: number,
}

function CellSumRow(props: Props) {
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
  indexParentRow: PropTypes.number.isRequired,
  percentDisplay: PropTypes.func.isRequired,
  sumAllCellRow: PropTypes.number.isRequired,
};

export default CellSumRow;
