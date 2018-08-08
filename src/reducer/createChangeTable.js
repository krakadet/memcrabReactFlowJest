import {
  ADD_PLUS_ONE_IN_CELL,
  ADD_ROW_TO_TABLE,
  CREATE_TABLE_BUTTON_CLICK,
  DELETE_ROW_TO_TABLE,
} from '../constans';


const initialState = {
  valueRow: 0,
  valueColumn: 0,
  lightValue: 0,
  dataMatrix: {
    rows: [],
    cells: {},
  },
};

export default (state = initialState, action) => {
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

    case ADD_PLUS_ONE_IN_CELL  :
      return { ...state, dataMatrix: payload };

    case ADD_ROW_TO_TABLE  :
      return { ...state, dataMatrix: payload };

    case DELETE_ROW_TO_TABLE:
      return { ...state, dataMatrix: payload };

    default:
      return state;
  }
}