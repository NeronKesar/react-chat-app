import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import reducer from './reducer';
import logger from 'redux-logger';
import history from '../history';

const enhancer = applyMiddleware(routerMiddleware(history), logger);

const store = createStore(reducer, enhancer);

export default store;
