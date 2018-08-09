import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ButtonDelete from './ButtonDelete';
import ButtonAdd from './ButtonAdd';
import Cell from './Cell';
import CellSumRow from './CellSumRow';

class RowComponent extends PureComponent {
    sumRow = (rowId, data) => {
      let sum = 0;
      for (const i of data.rows[rowId].cells) {
        sum += data.cells[i].value;
      }
      return sum;
    };

    percentValue = (value, sumRow) => Math.round(value * 100 / sumRow);


    render() {
      const {
        cellsDataValue,
        indexParentRow,
        dataMatrix,
        id,
        updateDataLightArrValue,
        highlightedCells,
        percentDisplayRow,
        percentDisplay,
      } = this.props;
      return (
        <tr id={id}>
          {percentDisplayRow === id ? cellsDataValue.map(val => (
            <Cell
              key={dataMatrix.cells[val].id}
              highlighted={highlightedCells.includes(val)}
              updateDataLightArrValue={updateDataLightArrValue}
              value={this.percentValue(dataMatrix.cells[val].value, this.sumRow(indexParentRow, dataMatrix))}
              id={dataMatrix.cells[val].id}
              isStyle
            />
          )) : cellsDataValue.map(val => (
            <Cell
              key={dataMatrix.cells[val].id}
              highlighted={highlightedCells.includes(val)}
              updateDataLightArrValue={updateDataLightArrValue}
              value={dataMatrix.cells[val].value}
              id={dataMatrix.cells[val].id}
            />
          ))
                }

          {
            <CellSumRow
              key={id}
              indexParentRow={indexParentRow}
              percentDisplay={percentDisplay}
              sumAllCellRow={this.sumRow(indexParentRow, dataMatrix)}
            />
                }
          {
            <ButtonAdd />
                }
          {
            <ButtonDelete />
                }
        </tr>
      );
    }
}


RowComponent.propTypes = {
  dataMatrix: PropTypes.object,
  updateData: PropTypes.func,
  indexParentRow: PropTypes.number,
  percentDisplayRow: PropTypes.string,
  id: PropTypes.string,
  updateDataLightArrValue: PropTypes.func,
  cellsDataValue: PropTypes.array,
  highlightedCells: PropTypes.array,
  percentDisplay: PropTypes.func,
};

export default connect((state => ({
  dataMatrix: state.state.dataMatrix,
})))(RowComponent);
