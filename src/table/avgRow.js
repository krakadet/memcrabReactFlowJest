// @flow
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

type Props = {
  avgArr: Array<string>
};


function AvgRow(props: Props) {
  const { avgArr } = props;
  return (
    <tr>
      {avgArr.map((value: string, index: number) => (
        <td key={`_${value}`} id={classNames(`avgCell_${index}`)}>
          {value}
        </td>
      ))}
    </tr>
  );
}

AvgRow.propTypes = {
  avgArr: PropTypes.arrayOf(PropTypes.string).isRequired,
};


export default AvgRow;
