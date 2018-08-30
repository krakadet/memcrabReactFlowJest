// @flow
import * as React from 'react';

type Props = {|
  +avgArr: $ReadOnlyArray<string>
|};

function AvgRow(props: Props) {
  const { avgArr } = props;
  return (
    <tr>
      {avgArr.map((value: string, index: number) => (
        <td key={`_${value}__${index}`} id={`avgCell_${index}`}>
          {value}
        </td>
      ))}
    </tr>
  );
}

export default AvgRow;
