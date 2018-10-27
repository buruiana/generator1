import * as actionTypes from './actionTypes';

export const getAllProviders = () => ({
  type: actionTypes.GET_ALL_PROVIDERS,
})

export const setAllProviders = providers => ({
  type: actionTypes.SET_ALL_PROVIDERS,
  providers,
})

export const setProvider = provider => ({
  type: actionTypes.SET_PROVIDER,
  provider,
})

export const deleteProvider = provider => ({
  type: actionTypes.DELETE_PROVIDER,
  provider,
})
