import * as actionTypes from '../providersService/actionTypes';

export const initialState = () => ({
  providers: {},
  provider: {}
});

export default (state = initialState(), action) => {
  switch (action.type) {
    case actionTypes.SET_ALL_PROVIDERS:
      return {
        ...state,
        providers: action.providers,
      };
    case actionTypes.SET_SELECTED_PROVIDER:
      return {
        ...state,
        provider: action.provider,
      };
    default:
      return state;
  }
}