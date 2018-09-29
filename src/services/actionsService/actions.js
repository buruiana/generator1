import * as actionTypes from './actionTypes';

export const setActions = actions => {
  return {
    type: actionTypes.SET_ACTIONS,
    actions
  };
}
