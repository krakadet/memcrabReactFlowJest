import {createStore, applyMiddleware} from 'redux';
import combineReducers from '../reducer/index';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const enhancer = composeWithDevTools(applyMiddleware( logger, thunk));

const store = createStore(combineReducers, enhancer);


export default store