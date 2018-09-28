import * as actions from './actionTypes';

export const setActionTypes = actionTypes => {
  return {
    type: actions.ACTION_TYPES_SET,
    actionTypes
  };
}
