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

export const setProjectDestination = projectDestination => ({
  type: actionTypes.SET_PROJECT_DESTINATION,
  projectDestination
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

export const setProjectJsonForm = jsonForm => ({
  type: actionTypes.SET_PROJECT_SETTINGS_JSON_FORM,
  jsonForm
})

export const exportProjectFiles = data => ({
  type: actionTypes.EXPORT_PROJECT_FILES,
  data
})