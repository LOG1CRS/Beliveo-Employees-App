import { gql } from '@apollo/client';

export const register = gql`
  mutation ($input: RegisterInput!) {
    register(input: $input) {
      RegisterInput {
        username
        email
        password
      }
      username
      email
      token
    }
  }
`;

export const login = gql`
  mutation ($email: String!, $password: String!) {
    username
    email
    token
  }
`;
