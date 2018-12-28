import * as actionTypes from './actionTypes';

export const initialState = () => ({
  saga: '',
  reducer: '',
  actions: '',
  actionTypez: '',
  hoc: '',
  smart: '',
  dumb: '',
  styles: '',
  jsonForm: '',
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
    case actionTypes.SET_HOC_CODE:
      return {
        ...state,
        hoc: action.hoc
      };
    case actionTypes.SET_SMART_CODE:
      return {
        ...state,
        smart: action.smart
      };
    case actionTypes.SET_DUMB_CODE:
      return {
        ...state,
        dumb: action.dumb
      };
    case actionTypes.SET_STYLES_CODE:
      return {
        ...state,
        styles: action.styles
      };
    case actionTypes.SET_JSON_FORM_CODE:
      return {
        ...state,
        jsonForm: action.jsonForm
      };
    default:
      return state;
  }
}