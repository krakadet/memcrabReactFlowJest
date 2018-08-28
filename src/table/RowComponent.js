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

export class RowComponent extends React.Component<Props> {
  sumRow = (rowIndex: number, data: Matrix): number => data.rows[rowIndex].cells.reduce((accumulator, currentValue) => accumulator + data.cells[currentValue].value, 0);

  percentValue = (value: number, sumRow: number): number => Math.round(value * 100 / sumRow);


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
    } = this.props; return (
      <tr id={id}>
        {cellsDataValue.map(val => (
          <Cell
            key={dataMatrix.cells[val].id}
            highlighted={highlightedCells.includes(val)}
            updateDataLightArrValue={updateDataLightArrValue}
            value={percentDisplayRow === id
              ? this.percentValue(dataMatrix.cells[val].value, this.sumRow(indexParentRow, dataMatrix))
              : dataMatrix.cells[val].value}
            id={dataMatrix.cells[val].id}
            isStyle={percentDisplayRow === id}
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
    dataMatrix: state.store.dataMatrix,
  };
}

export default connect(
  mapStateToProps, undefined,
)(RowComponent);
