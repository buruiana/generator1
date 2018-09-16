import * as actionTypes from './actionTypes';

export const getAllComponents = () => ({
  type: actionTypes.GET_ALL_COMPONENTS,
})

export const setAllComponents = components => ({
  type: actionTypes.SET_ALL_COMPONENTS,
  components,
})
