import * as actionTypes from './actionTypes';

export const getAllComponents = () => ({
  type: actionTypes.GET_ALL_COMPONENTS,
})

export const setAllComponents = components => ({
  type: actionTypes.SET_ALL_COMPONENTS,
  components,
})

export const setSelectedComponent = component => ({
  type: actionTypes.SET_SELECTED_COMPONENT,
  component,
})

export const deleteComponent = () => ({
  type: actionTypes.DELETE_COMPONENT,
})

export const setComponent = component => ({
  type: actionTypes.SET_COMPONENT,
})