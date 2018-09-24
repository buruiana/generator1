import * as actionTypes from '../providersService/actionTypes';

export const initialState = () => ({
  providers: {},
});

export default (state = initialState(), action) => {
  switch (action.type) {
    case actionTypes.SET_ALL_PROVIDERS:
      return {
        ...state,
        providers: action.providers,
      };
    default:
      return state;
  }
}