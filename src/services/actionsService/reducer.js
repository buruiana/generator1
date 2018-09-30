import * as actionTypes from '../actionsService/actionTypes';

export const initialState = () => ({
  actions: [],
});

export default (state = initialState(), action) => {
  switch (action.type) {
    case actionTypes.SET_ACTIONS:
      return {
        ...state,
        actions: action.actions
      };
    default:
      return state;
  }
}