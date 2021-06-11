const gql = require('graphql-tag');

module.exports = gql`
  type User {
    username: String!
    email: String!
    token: String!
  }
  type Employee {
    id: Int!
    name: String!
    lastName: String!
    email: String!
    nationality: String!
    phone: String!
    civilStatus: String!
    birthday: String!
  }
  input EmployeeInput {
    id: Int!
    name: String!
    lastName: String!
    email: String!
    nationality: String!
    phone: String!
    civilStatus: String!
    birthday: String!
  }
  input RegisterInput {
    username: String!
    email: String!
    password: String!
  }
  type Query {
    getEmployees: [Employee]
  }
  type Mutation {
    register(registerInput: RegisterInput!): User!
    login(email: String!, password: String!): User!
    addNewEmployee(employeeInput: EmployeeInput!): Employee!
    editEmployee(employeeInput: EmployeeInput!): Employee!
    deleteEmployee(id: Int!): Int
  }
`;
