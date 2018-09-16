import * as actionTypes from './actionTypes';

export const setModalVisibility = modalVisible => {
  return {
    type: actionTypes.MODAL_VISIBILITY_SET,
    payload: modalVisible
  };
}

export const setModalContent = modalContent => {
  return {
    type: actionTypes.MODAL_CONTENT_SET,
    payload: modalContent
  };
}