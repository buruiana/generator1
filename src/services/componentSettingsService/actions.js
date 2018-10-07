import * as actionTypes from './actionTypes';

export const setHoc = hoc => {
  return {
    type: actionTypes.SET_HOC,
    hoc
  };
}

export const setSmartSettings = smart => ({
  type: actionTypes.SET_SMART_SETTINGS,
  smart,
})