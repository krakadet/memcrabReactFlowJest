// @flow
import { formReducer } from 'redux-pure-form';

import { UPDATE_VALUES_FROM_SERVER } from '../constans';

const initialState = {
  profile: {
    name: 'profile', rowValue: 0, columnValue: 0, lightValue: 0,
  },
};
type inputsValue = {
  [key: string]: {
    name: string,
    rowValue: number,
    columnValue: number,
    lightValue: number,
  }
}

export default (state: inputsValue = initialState, action: Object) => {
  const { type, payload } = action;
  switch (type) {
    case UPDATE_VALUES_FROM_SERVER:
      return {
        ...state,
        profile: {
          ...state.profile,
          rowValue: payload.rowCount,
          columnValue: payload.columnCount,
          lightValue: payload.lightCount,
        },
      };
    default:
      return formReducer('profile')(state, action);
  }
};
