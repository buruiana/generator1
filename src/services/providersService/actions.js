import * as actionTypes from './actionTypes';

export const getAllProviders = () => ({
  type: actionTypes.GET_ALL_PROVIDERS,
})

export const setAllProviders = providers => ({
  type: actionTypes.SET_ALL_PROVIDERS,
  providers,
})
