export const ADD_EMPLOYEE_SELECTED = 'ADD_EMPLOYEE_SELECTED';
export const REMOVE_EMPLOYEE_SELECTED = 'REMOVE_EMPLOYEE_SELECTED';

export const addEmployeeSelected = (employee) => {
  return {
    type: ADD_EMPLOYEE_SELECTED,
    payload: employee,
  };
};

export const removeEmployeeSelected = () => {
  return {
    type: REMOVE_EMPLOYEE_SELECTED,
  };
};
