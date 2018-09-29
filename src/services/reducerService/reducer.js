import * as actionTypes from './actionTypes';

export const initialState = () => ({
  reducer: [],
});

export default (state = initialState(), action) => {
  switch (action.type) {
    case actionTypes.SET_REDUCER:
      return {
        ...state,
        reducer: action.reducer
      };
    default:
      return state;
  }
}