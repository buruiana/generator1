import * as actionTypes from './actionTypes';

export const getAllProjectTypes = () => ({
  type: actionTypes.GET_ALL_PROJECT_TYPES,
})

export const setAllProjectTypes = projectTypes => ({
  type: actionTypes.SET_ALL_PROJECT_TYPES,
  projectTypes,
})

export const setProjectType = () => ({
  type: actionTypes.SET_PROJECT_TYPE,
})

export const setSelectedProjectType = projectType => ({
  type: actionTypes.SET_SELECTED_PROJECT_TYPE,
  projectType,
})

export const deleteProjectType = () => ({
  type: actionTypes.DELETE_PROJECT_TYPE,
})
