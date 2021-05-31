import { store, persistor } from './store';
import { addAuthToken, removeAuthToken } from './actions/authTokenActions';
import {
  addEmployeeSelected,
  removeEmployeeSelected,
} from './actions/employeeSelectedActions';

export {
  store,
  persistor,
  addAuthToken,
  removeAuthToken,
  addEmployeeSelected,
  removeEmployeeSelected,
};
