import * as actionTypes from './actionTypes';

export const setReducer = reducer => {
  return {
    type: actionTypes.SET_REDUCER,
    reducer
  };
}
