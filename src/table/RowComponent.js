// @flow
/* eslint-env es6 */
import * as React from 'react';
import { connect } from 'react-redux';
import ButtonDelete from './ButtonDelete';
import ButtonAdd from './ButtonAdd';
import Cell from './Cell';
import CellSumRow from './CellSumRow';
import type { Matrix } from '../types/MyTypes';

type Props = {
  dataMatrix: Matrix,
  cellsDataValue: Array<string>,
  indexParentRow: number,
  id: string,
  updateDataLightArrValue: Function,
  percentDisplayRow: ?string,
  highlightedCells: Array<string>,
  percentDisplay: Function,
  rowId: string,
};

class RowComponent extends React.Component<Props> {
  sumRow = (rowIndex, data: Matrix): number => data.rows[rowIndex].cells.reduce((accumulator, currentValue) => accumulator + data.cells[currentValue].value, 0);

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
      rowId,
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
            percentDisplay={percentDisplay}
            sumAllCellRow={this.sumRow(indexParentRow, dataMatrix)}
            rowId={rowId}
          />
        }
        {
          <ButtonAdd />
        }
        {
          <ButtonDelete
            indexParentRow={indexParentRow}
          />
        }
      </tr>
    );
  }
}

function mapStateToProps(state) {
  return {
    dataMatrix: state.state.dataMatrix,
  };
}

export default connect(
  mapStateToProps,
)(RowComponent);
