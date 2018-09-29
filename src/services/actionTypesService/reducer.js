import * as actions from '../actionTypesService/actionTypes';

export const initialState = () => ({
  actionTypes: [],
});

export default (state = initialState(), action) => {
  switch (action.type) {
    case actions.SET_ACTION_TYPES:
      return {
        ...state,
        actionTypes: action.actionTypes
      };
    default:
      return state;
  }
}