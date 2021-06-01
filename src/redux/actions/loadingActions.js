export const SET_LOADING_ON = 'SET_LOADING_ON';
export const SET_LOADING_OFF = 'SET_LOADING_OFF';

export const setLoadingOn = () => {
  return {
    type: SET_LOADING_ON,
  };
};

export const setLoadingOff = () => {
  return {
    type: SET_LOADING_OFF,
  };
};
