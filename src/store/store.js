import {createStore, applyMiddleware} from 'redux'
import reducer from '../reducer/index';
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';


const enhancer = composeWithDevTools(applyMiddleware( logger));

const store = createStore(reducer, enhancer);

//dev only

window.store = store;
export default store