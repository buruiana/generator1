import * as actionTypes from './actionTypes';

export const setSagaCode = saga => ({
  type: actionTypes.SET_SAGA_CODE,
  saga
});

export const setReducerCode = reducer => ({
  type: actionTypes.SET_REDUCER_CODE,
  reducer
});

export const setActionsCode = actions => ({
  type: actionTypes.SET_ACTIONS_CODE,
  actions
});

export const setActionTypesCode = actionTypez => ({
  type: actionTypes.SET_ACTION_TYPES_CODE,
  actionTypez
});

export const setHocCode = hoc => ({
  type: actionTypes.SET_HOC_CODE,
  hoc
});

export const setSmartCode = smart => ({
  type: actionTypes.SET_SMART_CODE,
  smart
});