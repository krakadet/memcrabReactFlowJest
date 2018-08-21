// @flow
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import combineReducers from '../reducer/reducers';

const enhancer = composeWithDevTools(applyMiddleware(logger, thunk));

const store = createStore(combineReducers, enhancer);


export default store;
