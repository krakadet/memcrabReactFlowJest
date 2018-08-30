// @flow
import * as React from 'react';

type Props = {|
  +addRowToTable: Function,
|}

export function ButtonAdd(props: Props) {
  const handleClick = (event: SyntheticEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const { addRowToTable } = props;
    addRowToTable();
  };

  return (
    <td>
      <button type="button" id="theButton" onClick={handleClick}>
        {' '}
                    Add
        {' '}
      </button>
    </td>
  );
}

export default ButtonAdd;
