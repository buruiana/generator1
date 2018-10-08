import * as actionTypes from './actionTypes';

export const getAllComponents = () => ({
  type: actionTypes.GET_ALL_COMPONENTS,
})

export const setAllComponents = components => ({
  type: actionTypes.SET_ALL_COMPONENTS,
  components,
})

export const deleteComponent = component => ({
  type: actionTypes.DELETE_COMPONENT,
  component,
})

export const setComponent = component => ({
  type: actionTypes.SET_COMPONENT,
  component,
})