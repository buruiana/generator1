import * as actionTypes from '../technosService/actionTypes';

export const initialState = () => ({
  technos: {},
});

export default (state = initialState(), action) => {
  console.log('console: action0', action.type, actionTypes.SET_ALL_TECHNOS);
  switch (action.type) {
    case actionTypes.SET_ALL_TECHNOS:
      console.log('console: action', action);
      return {
        ...state,
        technos: action.technos,
      };
    default:
      return state;
  }
}