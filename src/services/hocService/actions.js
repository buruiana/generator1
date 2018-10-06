import * as actionTypes from './actionTypes';

export const setHoc = hoc => {
  return {
    type: actionTypes.SET_HOC,
    hoc
  };
}
