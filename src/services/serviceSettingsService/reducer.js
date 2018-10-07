import * as actionTypes from '../serviceSettingsService/actionTypes';

export const initialState = () => ({
  actions: [],
  saga: [],
  reducer: [],
  actionTypes: [],
});

export default (state = initialState(), action) => {
  switch (action.type) {
    case actionTypes.SET_ACTIONS:
      return {
        ...state,
        actions: action.actions
      };
    case actionTypes.SET_ACTION_TYPES:
      return {
        ...state,
        actionTypes: action.actionTypes
      };
    case actionTypes.SET_REDUCER:
      return {
        ...state,
        reducer: action.reducer
      };
    case actionTypes.SET_SAGA:
      return {
        ...state,
        saga: action.saga
      };
    default:
      return state;
  }
}