import * as actionTypes from './actionTypes';

export const initialState = () => ({
  saga: '',
  reducer: '',
  actions: '',
  actionTypez: '',
});

export default (state = initialState(), action) => {
  switch (action.type) {
    case actionTypes.SET_SAGA_CODE:
      return {
        ...state,
        saga: action.saga
      };
    case actionTypes.SET_REDUCER_CODE:
      return {
        ...state,
        reducer: action.reducer
      };
    case actionTypes.SET_ACTIONS_CODE:
      return {
        ...state,
        actions: action.actions
      };
    case actionTypes.SET_ACTION_TYPES_CODE:
      return {
        ...state,
        actionTypez: action.actionTypez
      };
    default:
      return state;
  }
}