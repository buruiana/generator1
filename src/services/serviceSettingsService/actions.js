import * as actionTypez from './actionTypes';

export const setActions = actions => {
  return {
    type: actionTypez.SET_ACTIONS,
    actions
  };
}

export const setActionTypes = actionTypes => {
  return {
    type: actionTypez.SET_ACTION_TYPES,
    actionTypes
  };
}

export const setReducer = reducer => {
  return {
    type: actionTypez.SET_REDUCER,
    reducer
  };
}

export const setSaga = saga => {
  return {
    type: actionTypez.SET_SAGA,
    saga
  };
}