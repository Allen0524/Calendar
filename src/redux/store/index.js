import { createStore, combineReducers } from 'redux';
import header from '../reducer/header';
import modal from '../reducer/modal';

const allReducer = combineReducers({
  header,
  modal,
});

const store = createStore(allReducer);

export default store;
