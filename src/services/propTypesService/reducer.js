import * as actionTypes from '../propTypesService/actionTypes';

export const initialState = () => ({
  propTypes: {},
  propType: {}
});

export default (state = initialState(), action) => {
  switch (action.type) {
    case actionTypes.SET_ALL_PROP_TYPES:
      return {
        ...state,
        propTypes: action.propTypes,
      };
    case actionTypes.SET_SELECTED_PROP_TYPE:
      return {
        ...state,
        propType: action.propType,
      };
    default:
      return state;
  }
}