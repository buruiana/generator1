import * as actionTypes from './actionTypes';

export const setConfigs = configs => {
  return {
    type: actionTypes.CONFIGS_SET,
    payload: configs
  };
}
