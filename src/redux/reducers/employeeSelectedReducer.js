import {
  ADD_EMPLOYEE_SELECTED,
  REMOVE_EMPLOYEE_SELECTED,
} from '../actions/employeeSelectedActions';

const employeeSelectedReducer = (state = null, action) => {
  switch (action.type) {
    case ADD_EMPLOYEE_SELECTED:
      return action.payload;
    case REMOVE_EMPLOYEE_SELECTED:
      return null;

    default:
      return state;
  }
};

export default employeeSelectedReducer;
