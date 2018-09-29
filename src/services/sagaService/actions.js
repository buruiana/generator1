import * as actionTypes from './actionTypes';

export const setSaga = saga => {
  return {
    type: actionTypes.SET_SAGA,
    saga
  };
}
