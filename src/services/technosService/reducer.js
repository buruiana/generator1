import * as actionTypes from '../technosService/actionTypes';

export const initialState = () => ({
  technos: {},
});

export default (state = initialState(), action) => {
  switch (action.type) {
    case actionTypes.SET_ALL_TECHNOS:
      return {
        ...state,
        technos: action.technos,
      };
    default:
      return state;
  }
}