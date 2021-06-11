import { gql } from '@apollo/client';

export const register = gql`
  mutation ($input: RegisterInput!) {
    register(registerInput: $input) {
      username
      email
      token
    }
  }
`;

export const login = gql`
  mutation logIn($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      username
      email
      token
    }
  }
`;

export const getEmployees = gql`
  query {
    getEmployees {
      id
      name
      lastName
      email
      nationality
      phone
      civilStatus
      birthday
    }
  }
`;

export const addEmployee = gql`
  mutation addEmployee($input: EmployeeInput!) {
    addNewEmployee(employeeInput: $input) {
      id
      name
      lastName
      email
      nationality
      phone
      civilStatus
      birthday
    }
  }
`;

export const editEmployee = gql`
  mutation editAnEmployee($input: EmployeeInput!) {
    editEmployee(employeeInput: $input) {
      id
      name
      lastName
      email
      nationality
      phone
      civilStatus
      birthday
    }
  }
`;

export const deleteEmployee = gql`
  mutation deleteAnEmployee($id: Int!) {
    deleteEmployee(id: $id)
  }
`;
