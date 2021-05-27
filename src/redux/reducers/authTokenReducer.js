import { ADD_AUTH_TOKEN, REMOVE_AUTH_TOKEN } from '../actions/authTokenActions';

const authTokenReducer = (state = null, action) => {
  switch (action.type) {
    case ADD_AUTH_TOKEN:
      return action.payload;
    case REMOVE_AUTH_TOKEN:
      return null;

    default:
      return state;
  }
};

export default authTokenReducer;
