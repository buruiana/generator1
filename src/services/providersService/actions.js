import * as actionTypes from './actionTypes';

export const getAllProviders = () => ({
  type: actionTypes.GET_ALL_PROVIDERS,
})

export const setAllProviders = providers => ({
  type: actionTypes.SET_ALL_PROVIDERS,
  providers,
})

export const setProvider = () => ({
  type: actionTypes.SET_PROVIDER,
})

export const setSelectedProvider = provider => ({
  type: actionTypes.SET_SELECTED_PROVIDER,
  provider,
})

export const deleteProvider = () => ({
  type: actionTypes.DELETE_PROVIDER,
})
