import * as actionTypes from './actionTypes';

export const setActions = actions => {
  return {
    type: actionTypes.SET_ACTIONS,
    actions
  };
}

export const setActionTypes = actionTypes => {
  return {
    type: actions.SET_ACTION_TYPES,
    actionTypes
  };
}

export const setReducer = reducer => {
  return {
    type: actionTypes.SET_REDUCER,
    reducer
  };
}

export const setSaga = saga => {
  return {
    type: actionTypes.SET_SAGA,
    saga
  };
}