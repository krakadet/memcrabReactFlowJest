// @flow
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import combineReducers from '../reducer/reducers';

const enhancer = composeWithDevTools(applyMiddleware(logger));

const store = createStore(combineReducers, enhancer);


export default store;
