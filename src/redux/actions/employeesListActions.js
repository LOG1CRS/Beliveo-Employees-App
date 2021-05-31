export const UPDATE_EMPLOYEES_LIST = 'UPDATE_EMPLOYEES_LIST';
export const ADD_NEW_EMPLOYEE = 'ADD_NEW_EMPLOYEE';
export const UPDATE_EMPLOYEE = 'UPDATE_EMPLOYEE';
export const REMOVE_EMPLOYEE = 'REMOVE_EMPLOYEE';

export const updateEmployeesList = (employeesList) => {
  return {
    type: UPDATE_EMPLOYEES_LIST,
    payload: employeesList,
  };
};

export const addNewEmployee = (employee) => {
  return {
    type: ADD_NEW_EMPLOYEE,
    payload: employee,
  };
};

export const updateEmployee = (id, employee) => {
  return {
    type: UPDATE_EMPLOYEE,
    payload: {
      id,
      employee,
    },
  };
};

export const removeEmployee = (id) => {
  return {
    type: REMOVE_EMPLOYEE,
    payload: id,
  };
};
