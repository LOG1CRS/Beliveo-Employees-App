import { combineReducers } from 'redux';
import authTokenReducer from './authTokenReducer';
import employeeSelectedReducer from './employeeSelectedReducer';
import employeesListReducer from './employeesListReducer';
import userReducer from './userReducer';
import loadingReducer from './loadingReducer';

const rootReducer = combineReducers({
  authToken: authTokenReducer,
  employeeSelected: employeeSelectedReducer,
  employeesList: employeesListReducer,
  user: userReducer,
  loading: loadingReducer,
});

export default rootReducer;
