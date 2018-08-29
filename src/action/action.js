// @flow
import {
  CREATE_TABLE_BUTTON_CLICK,
  ADD_PLUS_ONE_IN_CELL,
  DELETE_ROW_TO_TABLE,
  ADD_ROW_TO_TABLE,
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


export const createTableAction = () => (dispatch: Function) => {
  /* type: string,
  payload: {
    rowCount: string,
    columnCount: string,
    lightCount: string,
    newMatrix: Matrix
  }
} => {
*/
  const status = (response) => {
    if (response.status !== 200) {
      return Promise.reject(new Error(response.statusText));
    }
    return Promise.resolve(response);
  };
  const json = response => response.json();

  fetch('https://api.myjson.com/bins/yfvzc')
    .then(status)
    .then(json)
    .then((data) => {
      const columnCount = data[0].columnValue;
      const rowCount = data[0].rowvalue;
      const lightCount = data[0].lightValue;

      function createTable(): Matrix {
        const matrix: Matrix = {
          rows: [],
          cells: {},
        };
        for (let i: number = 0; i < +rowCount; i += 1) {
          const row = createRow(columnCount);
          matrix.rows[i] = row.row;
          matrix.cells = { ...matrix.cells, ...row.cells };
        }
        return matrix;
      }
      const newMatrix = createTable();
      dispatch(createTableAC(rowCount, columnCount, lightCount, newMatrix));
    })

    .catch((error) => {
      console.log('error', error);
    });
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
