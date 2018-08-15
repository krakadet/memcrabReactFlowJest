// @flow
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ButtonDelete from './ButtonDelete';
import ButtonAdd from './ButtonAdd';
import Cell from './Cell';
import CellSumRow from './CellSumRow';
import type { Matrix } from '../MyTypes';

type Props = {
  dataMatrix: Matrix,
  cellsDataValue: Array<string>,
  indexParentRow: number,
  id: number,
  updateDataLightArrValue: Array<string>,
  percentDisplayRow: string,
  highlightedCells: Array<string>,
  percentDisplay: (?number) => void
};

class RowComponent extends Component<Props> {
    sumRow = (rowId, data: Matrix): number => {
      let sum = 0;
      for (const i of data.rows[rowId].cells) {
        sum += data.cells[i].value;
      }
      return sum;
    };

    percentValue = (value, sumRow): number => Math.round(value * 100 / sumRow);


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
  dataMatrix: PropTypes.shape({
    rows: PropTypes.arrayOf(PropTypes.object),
    cells: PropTypes.objectOf(PropTypes.object),
  }).isRequired,
  indexParentRow: PropTypes.number.isRequired,
  percentDisplayRow: PropTypes.string,
  id: PropTypes.string.isRequired,
  updateDataLightArrValue: PropTypes.func.isRequired,
  cellsDataValue: PropTypes.arrayOf(PropTypes.string).isRequired,
  highlightedCells: PropTypes.arrayOf(PropTypes.string).isRequired,
  percentDisplay: PropTypes.func.isRequired,
};

export default connect((state => ({
  dataMatrix: state.state.dataMatrix,
})))(RowComponent);
