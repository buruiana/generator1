import * as actionTypes from './actionTypes';

export const setCurrentModal = currentModal => {
  return {
    type: actionTypes.SET_CURRENT_MODAL,
    payload: currentModal
  };
}

export const setAllModals = allModals => {
  return {
    type: actionTypes.SET_ALL_MODALS,
    payload: allModals
  };
}