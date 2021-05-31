import {
  UPDATE_EMPLOYEES_LIST,
  ADD_NEW_EMPLOYEE,
  UPDATE_EMPLOYEE,
  REMOVE_EMPLOYEE,
} from '../actions/employeesListActions';
import { users } from '../../utils';

const employeesListReducer = (state = users, action) => {
  switch (action.type) {
    case UPDATE_EMPLOYEES_LIST:
      return action.payload;
    case ADD_NEW_EMPLOYEE:
      state = Object.assign([], state);
      state.push(action.payload);
      return state;
    case UPDATE_EMPLOYEE:
      let indexToUpdate = state.findIndex(
        (employee) => employee.id === action.payload.id
      );
      return state.map((employee, index) => {
        if (index !== indexToUpdate) {
          return employee;
        }

        return {
          ...employee,
          name: action.payload.employee.name,
          lastName: action.payload.employee.lastName,
          email: action.payload.employee.email,
          phone: action.payload.employee.phone,
        };
      });
    case REMOVE_EMPLOYEE:
      return state.filter((employee) => employee.id !== action.payload);

    default:
      return state;
  }
};

export default employeesListReducer;
