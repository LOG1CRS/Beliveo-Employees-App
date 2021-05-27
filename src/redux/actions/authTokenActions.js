export const ADD_AUTH_TOKEN = 'ADD_AUTH_TOKEN';
export const REMOVE_AUTH_TOKEN = 'REMOVE_AUTH_TOKEN';

export const addAuthToken = (token) => {
  return {
    type: ADD_AUTH_TOKEN,
    payload: token,
  };
};

export const removeAuthToken = () => {
  return {
    type: REMOVE_AUTH_TOKEN,
  };
};
