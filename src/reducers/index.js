import { combineReducers } from 'redux';
import contacts from './contacts.js';
import utils from './utils.js';

const rootReducer = combineReducers({
  utils,
  contacts
});

export default rootReducer;
