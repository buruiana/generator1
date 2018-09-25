import * as actionTypes from './actionTypes';

export const getAllTechnos = () => ({
  type: actionTypes.GET_ALL_TECHNOS,
})

export const setAllTechnos = technos => ({
  type: actionTypes.SET_ALL_TECHNOS,
  technos,
})