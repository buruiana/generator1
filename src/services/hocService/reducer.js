import * as actionTypes from '../hocService/actionTypes';

export const initialState = () => ({
  hoc: {},
});

export default (state = initialState(), action) => {
  switch (action.type) {
    case actionTypes.SET_HOC:
      return {
        ...state,
        hoc: action.hoc
      };
    default:
      return state;
  }
}