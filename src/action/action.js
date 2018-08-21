// @flow
import {
  CREATE_TABLE_BUTTON_CLICK,
  ADD_PLUS_ONE_IN_CELL,
  DELETE_ROW_TO_TABLE,
  ADD_ROW_TO_TABLE,
} from '../constans';

import type { Matrix, Row } from '../types/MyTypes';


const id = (): string => `_${(Date.now().toString(36) + Math.random().toString(36).substr(2, 5)).toUpperCase()}`;

function getRandom(): number {
  const min = 100;
  const max = 999;
  return Math.floor(Math.random() * (max - min)) + min;
}

function createRow(columnCount: string): Row {
  const row: {
    id: string,
    cells: Array<string>
  } = { id: id(), cells: [] };
  const cells = {};
  for (let i = 0; i < +columnCount; i += 1) {
    const cell: {
      id: string,
      value: number,
    } = { id: id(), value: getRandom() };
    cells[cell.id] = cell;
    row.cells[i] = cell.id;
  }
  return {
    row,
    cells,
  };
}


export function createTableAction(rowCount: number, columnCount: string, lightCount: number):{
  type: string,
  payload: {
    rowCount: number,
    columnCount: string,
    lightCount: number,
    newMatrix: Matrix
  }
} {
  function createTable(): Matrix {
    const matrix: Matrix = {
      rows: [],
      cells: {},
    };
    for (let i: number = 0; i < rowCount; i += 1) {
      const row = createRow(columnCount);
      matrix.rows[i] = row.row;
      matrix.cells = { ...matrix.cells, ...row.cells };
    }
    return matrix;
  }
  const newMatrix = createTable();
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

export function addCellPlusOne(idCell: string): {+type: string, +payload: string} {
  return {
    type: ADD_PLUS_ONE_IN_CELL,
    payload: idCell,
  };
}

function addRow(row): {+type: string, +payload: Row} {
  return {
    type: ADD_ROW_TO_TABLE,
    payload: row,
  };
}

export function addRowToTable() {
  return (dispatch: Function, getState: Function) => {
    const state = getState();
    const columnCount = state.state.valueColumn;
    const row = createRow(columnCount);
    dispatch(addRow(row));
  };
}

export function deleteRowTable(idRow: string): {+type: string, +payload: string} {
  return {
    type: DELETE_ROW_TO_TABLE,
    payload: idRow,
  };
}
