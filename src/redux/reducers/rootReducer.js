import { combineReducers } from 'redux';
import authTokenReducer from './authTokenReducer';
import employeeSelectedReducer from './employeeSelectedReducer';

const rootReducer = combineReducers({
  authToken: authTokenReducer,
  employeeSelected: employeeSelectedReducer,
});

export default rootReducer;
