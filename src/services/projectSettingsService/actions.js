import * as actionTypes from './actionTypes';

export const setProjectName = projectName => ({
  type: actionTypes.SET_PROJECT_NAME,
  projectName
})

export const setProjectType = projectType => ({
  type: actionTypes.SET_PROJECT_TYPE,
  projectType
})

export const setProjectTechno = projectTechno => ({
  type: actionTypes.SET_PROJECT_TECHNO,
  projectTechno
})