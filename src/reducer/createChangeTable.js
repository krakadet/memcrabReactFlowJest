// @flow
import {
  ADD_PLUS_ONE_IN_CELL,
  ADD_ROW_TO_TABLE,
  CREATE_TABLE_BUTTON_CLICK,
  DELETE_ROW_TO_TABLE,
} from '../constans';

import type { Matrix } from '../types/MyTypes';


export const initialState = {
  valueRow: 0,
  valueColumn: 0,
  lightValue: 0,
  cells: {},
  dataMatrix: {
    rows: [],
    cells: {},
  },
};

type State = {
  +valueRow: number,
  +valueColumn: number,
  +lightValue: number,
  +dataMatrix: Matrix,
  +cells: {}
};


export default (store: State = initialState, action: Object): State => {
  const { type, payload } = action;
  switch (type) {
    case CREATE_TABLE_BUTTON_CLICK:
      return {
        ...store,
        dataMatrix: payload.newMatrix,
        valueRow: payload.rowCount,
        valueColumn: payload.columnCount,
        lightValue: payload.lightCount,
        cells: payload.newMatrix.cells,
      };

    case ADD_PLUS_ONE_IN_CELL:
      return {
        ...store,
        cells: {
          ...store.cells,
          [payload]: {
            ...store.cells[payload],
            value: store.cells[payload].value + 1,
          },
        },
      };

    case ADD_ROW_TO_TABLE:
      return {
        ...store,
        dataMatrix: {
          ...store.dataMatrix,
          cells: { ...store.dataMatrix.cells, ...payload.cells },
          rows: store.dataMatrix.rows.concat(payload.row),
        },
        cells: { ...store.cells, ...payload.cells },
      };

    case DELETE_ROW_TO_TABLE:
      return {
        ...store,
        dataMatrix: {
          ...store.dataMatrix,
          rows: store.dataMatrix.rows.filter((number, element) => element !== payload),
        },
      };

    default:
      return store;
  }
};
