// @flow
import * as React from 'react';


type Props = {|
  +deleteRowTable: Function,
|};

export function ButtonDelete(props: Props) {
  const handleClick = (event: SyntheticEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const { deleteRowTable } = props;
    deleteRowTable();
  };

  return (
    <td>
      <button type="button" id="theButton" onClick={handleClick}>
        {' '}
          Delete
        {' '}
      </button>
    </td>
  );
}

export default ButtonDelete;
