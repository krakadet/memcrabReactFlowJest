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
  dataMatrix: {
    rows: [],
    cells: {},
  },
};

type State = {
  +valueRow: number,
  +valueColumn: number,
  +lightValue: number,
  +dataMatrix: Matrix
};


export default (state: State = initialState, action: Object): State => {
  const { type, payload } = action;
  switch (type) {
    case CREATE_TABLE_BUTTON_CLICK:
      return {
        ...state,
        dataMatrix: payload.newMatrix,
        valueRow: payload.rowCount,
        valueColumn: payload.columnCount,
        lightValue: payload.lightCount,
      };

    case ADD_PLUS_ONE_IN_CELL:
      return {
        ...state,
        dataMatrix: {
          ...state.dataMatrix,
          cells: {
            ...state.dataMatrix.cells,
            [payload]: {
              ...state.dataMatrix.cells[payload],
              value: state.dataMatrix.cells[payload].value + 1,
            },
          },
        },
      };

    case ADD_ROW_TO_TABLE:
      return {
        ...state,
        dataMatrix: {
          ...state.dataMatrix,
          cells: { ...state.dataMatrix.cells, ...payload.cells },
          rows: state.dataMatrix.rows.concat(payload.row),
        },
      };

    case DELETE_ROW_TO_TABLE:
      return {
        ...state,
        dataMatrix: {
          ...state.dataMatrix,
          rows: state.dataMatrix.rows.filter((number, element) => element !== payload),
        },
      };

    default:
      return state;
  }
};
