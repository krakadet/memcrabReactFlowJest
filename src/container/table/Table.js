import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RowComponent from '../rowComponent/RowComponent';
import AvgRow from '../../component/avgRow/avgRow';
import connect from 'react-redux/es/connect/connect';
import {newLightingCell} from '../../helpers/lightNumbersHelpers';
import { avgColumnMatrix } from '../../helpers/avgColumnMatrix';

class Table extends Component {
  state = {
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
      percentDisplayRow,
      highlightedCells,
    } = this.state;
      const {
        dataMatrix,
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
                percentDisplayRow={percentDisplayRow}
                highlightedCells={highlightedCells}
                percentDisplay={this.percentDisplay}
              />
            ))}
            <AvgRow
              avgArr={avgColumnMatrix(this.props.dataMatrix)}
            />
          </tbody>
        </table>
      );
    }
}




Table.propTypes = {
  dataMatrix: PropTypes.object,
  lightValue: PropTypes.number,
};

export default connect ((state => {
  return {
    dataMatrix: state.state.dataMatrix,
    lightValue: state.state.lightValue
  }
})) (Table);
