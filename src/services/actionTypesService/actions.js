import * as actions from './actionTypes';

export const setActionTypes = actionTypes => {
  return {
    type: actions.SET_ACTION_TYPES,
    actionTypes
  };
}
