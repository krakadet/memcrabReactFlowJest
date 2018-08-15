// @flow
import {
  CREATE_TABLE_BUTTON_CLICK,
  ADD_PLUS_ONE_IN_CELL,
  DELETE_ROW_TO_TABLE,
  ADD_ROW_TO_TABLE,
} from '../constans';
import type { Matrix, createTableButtonClickAction } from '../MyTypes';


const id = (): string => `_${(Date.now().toString(36) + Math.random().toString(36).substr(2, 5)).toUpperCase()}`;

function getRandom(): number {
  const min = 100;
  const max = 999;
  return Math.floor(Math.random() * (max - min)) + min;
}

function createRow(columnCount: number) {
  const row: {
    id: string,
    cells: Array<string>
  } = { id: id(), cells: [] };
  const cells = {};
  for (let i = 0; i < columnCount; i += 1) {
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


export function createTableButtonClick(rowCount: number, columnCount: number, lightCount: number): createTableButtonClickAction {
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

export function addRowToTable(valueColumn: number): {+type: string, +payload: {}} {
  return {
    type: ADD_ROW_TO_TABLE,
    payload: createRow(valueColumn),
  };
}

export function deleteRowTable(): {+type: string} {
  return {
    type: DELETE_ROW_TO_TABLE,
  };
}
