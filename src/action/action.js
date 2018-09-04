// @flow
import {
  CREATE_TABLE_BUTTON_CLICK,
  ADD_PLUS_ONE_IN_CELL,
  DELETE_ROW_TO_TABLE,
  ADD_ROW_TO_TABLE,
  UPDATE_VALUES_FROM_SERVER,
} from '../constans';

import type {
  GetState,
  Matrix,
  Row,
} from '../types/MyTypes';

const id = (): string => `_${(Date.now().toString(36) + Math.random().toString(36).substr(2, 5)).toUpperCase()}`;

function getRandom(): number {
  const min = 100;
  const max = 999;
  return Math.floor(Math.random() * (max - min)) + min;
}

export function createRow(columnCount: string): Row {
  const row: {
    id: string,
    cells: $ReadOnlyArray<string>
  } = { id: id(), cells: [] };
  const cells = {};
  for (let i = 0; i < +columnCount; i += 1) {
    const cell: {
      id: string,
      value: number,
    } = { id: id(), value: getRandom() };
    cells[cell.id] = cell;
    const idCell = [cell.id];
    row.cells = row.cells.concat(idCell);
  }
  return {
    row,
    cells,
  };
}


function createTableAC(rowCount, columnCount, lightCount, newMatrix) {
  return {
    type: CREATE_TABLE_BUTTON_CLICK,
    payload: {
      rowCount,
      columnCount,
      lightCount,
      newMatrix,
    },
  };
}


export const createTableAction = (valueRow: string, valueColumn: string, lightValue: string) => (dispatch: Function) => {
  /* type: string,
  payload: {
    rowCount: string,
    columnCount: string,
    lightCount: string,
    newMatrix: Matrix
  }
} => {
*/
  function createTable(): Matrix {
    const matrix: Matrix = {
      rows: [],
      cells: {},
    };
    for (let i: number = 0; i < +valueRow; i += 1) {
      const row = createRow(valueColumn);
      const matrixRow = [row.row];
      matrix.rows = matrix.rows.concat(matrixRow);
      matrix.cells = { ...matrix.cells, ...row.cells };
    }
    return matrix;
  }
  const newMatrix = createTable();
  dispatch(createTableAC(valueRow, valueColumn, lightValue, newMatrix));
};


export const addCellPlusOneAC = (idCell: string): {+type: string, +payload: string} => ({
  type: ADD_PLUS_ONE_IN_CELL,
  payload: idCell,
});

function addRow(row): {+type: string, +payload: Row} {
  return {
    type: ADD_ROW_TO_TABLE,
    payload: row,
  };
}

export const addRowToTableAC = () => (dispatch: any, getState: GetState) => {
  const state = getState();
  const columnCount = state.store.valueColumn;
  const row = createRow(columnCount);
  dispatch(addRow(row));
};

export const deleteRowTableAC = (idRow: string): {+type: string, +payload: string} => ({
  type: DELETE_ROW_TO_TABLE,
  payload: idRow,
});

export const updateInputsValue = (columnCount: number, rowCount: number, lightCount: number): {+type: string, payload: Object} => ({
  type: UPDATE_VALUES_FROM_SERVER,
  payload: {
    columnCount,
    rowCount,
    lightCount,
  },
});
