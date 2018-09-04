// @flow
import { combineReducers } from 'redux';
import store from './createChangeTable';
import newInputValue from './reducerForm';

const reducers = {
  store,
  newInputValue,

};
export default combineReducers(reducers);
