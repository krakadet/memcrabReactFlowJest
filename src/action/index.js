import {
  CREATE_TABLE_BUTTON_CLICK,
  ADD_PLUS_ONE_IN_CELL,
  DELETE_ROW_TO_TABLE,
  ADD_ROW_TO_TABLE,
} from '../constans';
import { addRow, createTable, deleteRow } from '../helpers/addrow';


export function createTableButtonClick(rowCount, columnCount, lightCount) {
  const newMatrix = {
    rows: [],
    cells: {},
  };
  createTable(newMatrix, rowCount, columnCount);
  return {
    type: CREATE_TABLE_BUTTON_CLICK,
    payload: {
      rowCount: rowCount,
      columnCount: columnCount,
      lightCount: lightCount,
      newMatrix: newMatrix,
    },
  };
}

export function addCellPlusOne(idCell, dataMatrix) {
  const matrix = JSON.parse(JSON.stringify(dataMatrix));
  matrix.cells[idCell].value += 1;
  return {
    type: ADD_PLUS_ONE_IN_CELL,
    payload: matrix,
  };
}

export function deleteRowTable(dataMatrix) {
  const matrix = Object.assign({}, dataMatrix);
  deleteRow(matrix);
  return {
    type: DELETE_ROW_TO_TABLE,
    payload: matrix,
  };
}

export function addRowToTable(dataMatrix, valueColumn) {
  const matrix = Object.assign({}, dataMatrix);
  addRow(matrix, valueColumn);
  return{
    type: ADD_ROW_TO_TABLE,
    payload: matrix
  }

}
