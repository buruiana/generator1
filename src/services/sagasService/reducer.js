import * as actionTypes from '../sagasService/actionTypes';

export const initialState = () => ({
  sagas: [],
});

export default (state = initialState(), action) => {
  switch (action.type) {
    case actionTypes.SET_SAGAS:
      return {
        ...state,
        sagas: action.sagas
      };
    default:
      return state;
  }
}