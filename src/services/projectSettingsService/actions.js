import * as actionTypes from './actionTypes';

export const setProjectName = projectName => ({
  type: actionTypes.SET_PROJECT_SETTINGS_NAME,
  projectName
})

export const setProjectType = projectType => ({
  type: actionTypes.SET_PROJECT_SETTINGS_TYPE,
  projectType
})

export const setProjectTechno = projectTechno => ({
  type: actionTypes.SET_PROJECT_SETTINGS_TECHNO,
  projectTechno
})

export const setProjectComponentType = componentType => ({
  type: actionTypes.SET_PROJECT_SETTINGS_COMPONENT_TYPE,
  componentType
})