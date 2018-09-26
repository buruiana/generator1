import * as actionTypes from '../technosService/actionTypes';

export const initialState = () => ({
  technos: {},
  techno: {}
});

export default (state = initialState(), action) => {
  switch (action.type) {
    case actionTypes.SET_ALL_TECHNOS:
      return {
        ...state,
        technos: action.technos,
      };
    case actionTypes.SET_SELECTED_TECHNO:
      return {
        ...state,
        techno: action.techno,
      };
    default:
      return state;
  }
}