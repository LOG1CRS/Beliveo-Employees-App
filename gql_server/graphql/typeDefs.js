const gql = require('graphql-tag');

module.exports = gql`
  type Query {
    getEmployees: String!
  }
  type User {
    username: String!
    email: String!
    token: String!
  }
  input RegisterInput {
    username: String!
    email: String!
    password: String!
  }
  type Mutation {
    register(registerInput: RegisterInput): User!
    login(email: String!, password: String!): User!
  }
`;
