import * as actionTypes from './actionTypes';

export const initialState = () => ({
  saga: [],
});

export default (state = initialState(), action) => {
  switch (action.type) {
    case actionTypes.SET_SAGA:
      return {
        ...state,
        saga: action.saga
      };
    default:
      return state;
  }
}