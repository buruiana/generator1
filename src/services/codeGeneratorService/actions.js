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

export const setDumbCode = dumb => ({
  type: actionTypes.SET_DUMB_CODE,
  dumb
});

export const setStylesCode = styles => ({
  type: actionTypes.SET_STYLES_CODE,
  styles
});

export const setJsonFormSchemaCode = schema => ({
  type: actionTypes.SET_JSON_FORM_SCHEMA_CODE,
  schema
});

export const setJsonFormUISchemaCode = uiSchema => ({
  type: actionTypes.SET_JSON_FORM_UISCHEMA_CODE,
  uiSchema
});