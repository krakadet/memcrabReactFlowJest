import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import RowComponent from '../rowComponent/RowComponent';
import AvgRow from '../../component/avgRow/avgRow';
import { newLightingCell } from '../../helpers/lightNumbersHelpers';


class Table extends PureComponent {
    state = {
      lightArrValue: [],
      percentDisplayRow: null,
      highlightedCells: [],
    };

    updateDataLightArrValue = (idCell) => {
      const { lightValue, dataMatrix } = this.props;
      const highlightedArr = newLightingCell(idCell, lightValue, dataMatrix);

      this.setState({
        highlightedCells: highlightedArr,
      });
    };

    percentDisplay = (row) => {
      if (row) {
        this.setState({
          percentDisplayRow: row,
        });
      } else {
        this.setState({
          percentDisplayRow: row,
        });
      }
    };

    render() {
      const {
        dataMatrix
      } = this.props;

      return (
        <table>
          <tbody id="matrixTable">
            {dataMatrix.rows.map((arr, index) => (
              <RowComponent
                key={arr.id}
                arr={arr}
                id={arr.id}
                indexParentRow={index}
                cellsDataValue={arr.cells}
                updateDataLightArrValue={this.updateDataLightArrValue}
                percentDisplay={this.percentDisplay}
                {...this.props}
                {...this.state}
              />
            ))}
            <AvgRow
              dataMatrix={dataMatrix}
            />
          </tbody>
        </table>
      );
    }
}


Table.defaultProps = {
  dataMatrix: {
    rows: [],
    cells: {},
  },
  lightValue: 0,
};

Table.propTypes = {
  dataMatrix: PropTypes.object,
  updateData: PropTypes.func,
  addCellPlusOne: PropTypes.func,
  addRowToPage: PropTypes.func,
  lightValue: PropTypes.number,


};

export default Table;
