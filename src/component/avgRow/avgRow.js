import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { avgColumnMatrix } from '../../helpers/avgColumnMatrix';


function AvgRow(props) {
  const { dataMatrix } = props;

  const avgArr = avgColumnMatrix(dataMatrix);
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
  dataMatrix: PropTypes.object.isRequired,
};

export default AvgRow;
