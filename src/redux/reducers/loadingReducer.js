import { SET_LOADING_ON, SET_LOADING_OFF } from '../actions/loadingActions';

const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case SET_LOADING_ON:
      return true;
    case SET_LOADING_OFF:
      return false;
    default:
      return state;
  }
};

export default loadingReducer;
