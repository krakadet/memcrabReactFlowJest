// @flow
/* eslint-env es6 */
import * as React from 'react';
import { connect } from 'react-redux';
import ButtonDelete from './ButtonDelete';
import ButtonAdd from './ButtonAdd';
import Cell from './Cell';
import CellSumRow from './CellSumRow';
import type { Matrix } from '../types/MyTypes';
import {
  addCellPlusOneAC,
  addRowToTableAC,
  deleteRowTableAC,
} from '../action/action';

type Props = {|
  +dataMatrix: Matrix,
  +cellsDataValue: $ReadOnlyArray<string>,
  +indexParentRow: number,
  +id: string,
  +updateDataLightArrValue: Function,
  +percentDisplayRow: ?string,
  +highlightedCells: $ReadOnlyArray<string>,
  +percentDisplay: Function,
  +rowId: string,
  +lightValue: string,
  +addCellPlusOneAC: Function,
  +addRowToTableAC: Function,
  +deleteRowTableAC: Function,
|};

export class RowComponent extends React.Component<Props> {
  sumRow = (rowIndex: number, data: Matrix): number => data.rows[rowIndex].cells.reduce((accumulator, currentValue) => accumulator + data.cells[currentValue].value, 0);

  percentValue = (value: number, sumRow: number): number => Math.round(value * 100 / sumRow);

  addCellPlusOne = (id: string) => {
    const { addCellPlusOneAC } = this.props;
    addCellPlusOneAC(id);
  };

  addRowToTable = () => {
    const { addRowToTableAC } = this.props;
    addRowToTableAC();
  };

  deleteRowTable = () => {
    const { deleteRowTableAC, indexParentRow } = this.props;
    deleteRowTableAC(indexParentRow);
  }

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
      lightValue,
    } = this.props;
    return (
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
            addCellPlusOne={this.addCellPlusOne}
            lightValue={lightValue}
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
          <ButtonAdd addRowToTable={this.addRowToTable} />
        }
        {
          <ButtonDelete
            deleteRowTable={this.deleteRowTable}
          />
        }
      </tr>
    );
  }
}


export default connect((state => ({
  dataMatrix: state.store.dataMatrix,
  lightValue: state.store.lightValue,
})), { addCellPlusOneAC, addRowToTableAC, deleteRowTableAC })(RowComponent);
