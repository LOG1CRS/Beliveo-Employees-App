import { combineReducers } from 'redux';
import authTokenReducer from './authTokenReducer';
import employeeSelectedReducer from './employeeSelectedReducer';
import employeesListReducer from './employeesListReducer';

const rootReducer = combineReducers({
  authToken: authTokenReducer,
  employeeSelected: employeeSelectedReducer,
  employeesList: employeesListReducer,
});

export default rootReducer;
