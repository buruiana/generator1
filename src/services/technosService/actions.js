import * as actionTypes from './actionTypes';

export const getAllTechnos = () => ({
  type: actionTypes.GET_ALL_TECHNOS,
})

export const setAllTechnos = technos => ({
  type: actionTypes.SET_ALL_TECHNOS,
  technos,
})

export const setTechno = () => ({
  type: actionTypes.SET_TECHNO,
})

export const setSelectedTechno = techno => ({
  type: actionTypes.SET_SELECTED_TECHNO,
  techno,
})

export const deleteTechno = () => ({
  type: actionTypes.DELETE_TECHNO,
})
