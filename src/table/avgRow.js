import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

function AvgRow(props) {
  const { avgArr } = props;
  return (
    <tr>
      {avgArr.map((value, index) => (
        <td key={`_${value}_${index}`} id={classNames(`avgCell_${index}`)}>
          {value}
        </td>
      ))}
    </tr>
  );
}

AvgRow.propTypes = {
  avgArr: PropTypes.array.isRequired,
};

export default AvgRow;
