import { store, persistor } from './store';
import { addAuthToken, removeAuthToken } from './actions/authTokenActions';
import { addUser, removeUser } from './actions/userActions';
import { setLoadingOn, setLoadingOff } from './actions/loadingActions';
import {
  addEmployeeSelected,
  removeEmployeeSelected,
} from './actions/employeeSelectedActions';
import {
  updateEmployeesList,
  addNewEmployee,
  updateEmployee,
  removeEmployee,
} from './actions/employeesListActions';

export {
  store,
  persistor,
  addAuthToken,
  removeAuthToken,
  addEmployeeSelected,
  removeEmployeeSelected,
  updateEmployeesList,
  addNewEmployee,
  updateEmployee,
  removeEmployee,
  addUser,
  removeUser,
  setLoadingOn,
  setLoadingOff,
};
