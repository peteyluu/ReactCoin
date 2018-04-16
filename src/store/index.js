import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducer from '../reducers';

const middleware = [thunk, logger];

export default createStore(
  reducer,
  applyMiddleware(...middleware),
);
