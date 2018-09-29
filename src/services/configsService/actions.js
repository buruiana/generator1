import * as actionTypes from './actionTypes';

export const setConfigsIsOffline = isOffline => ({
  type: actionTypes.SET_CONFIGS_IS_OFFLINE,
  isOffline
});