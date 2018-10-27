import * as actionTypes from './actionTypes';

export const getAllPropTypes = () => ({
  type: actionTypes.GET_ALL_PROP_TYPES,
})

export const setAllPropTypes = propTypes => ({
  type: actionTypes.SET_ALL_PROP_TYPES,
  propTypes,
})

export const setPropType = propType => ({
  type: actionTypes.SET_PROP_TYPE,
  propType,
})

export const deletePropType = propType => ({
  type: actionTypes.DELETE_PROP_TYPE,
  propType,
})
