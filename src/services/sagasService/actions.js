import * as actionTypes from './actionTypes';

export const setSagas = sagas => {
  return {
    type: actionTypes.SET_SAGAS,
    sagas
  };
}
