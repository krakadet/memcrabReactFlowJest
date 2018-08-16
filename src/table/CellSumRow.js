// @flow
import * as React from 'react';

const getIdRow = (event: SyntheticEvent<HTMLTableCellElement>) => {
  const idRow = event.currentTarget.id;
  return idRow;
};

type Props = {
  percentDisplay: Function,
  sumAllCellRow: number,
  rowId: string
}

function CellSumRow(props: Props) {
  const handleMouseEnter = (event: SyntheticEvent<HTMLTableCellElement>) => {
    event.preventDefault();
    const row = getIdRow(event);
    props.percentDisplay(row);
  };


  const handleMouseLeave = (event: SyntheticEvent<HTMLTableCellElement>) => {
    event.preventDefault();
    props.percentDisplay(null);
  };

  const {

    sumAllCellRow,
    rowId,
  } = props;
  return (
    <td
      id={`${rowId}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {sumAllCellRow}
    </td>
  );
}

export default CellSumRow;
