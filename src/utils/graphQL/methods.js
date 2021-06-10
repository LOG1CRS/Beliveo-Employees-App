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
