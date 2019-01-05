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

export const setProjectHasJsonForm = hasJsonForm => ({
  type: actionTypes.SET_PROJECT_SETTINGS_HAS_JSON_FORM,
  hasJsonForm
})

export const setProjectError = err => ({
  type: actionTypes.SET_PROJECT_SETTINGS_ERROR,
  err
})
