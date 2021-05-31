import { store, persistor } from './store';
import { addAuthToken, removeAuthToken } from './actions/authTokenActions';
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
};
