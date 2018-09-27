import * as actionTypes from '../projectTypesService/actionTypes';

export const initialState = () => ({
  projectTypes: {},
  projectType: {}
});

export default (state = initialState(), action) => {
  switch (action.type) {
    case actionTypes.SET_ALL_PROJECT_TYPES:
      return {
        ...state,
        projectTypes: action.projectTypes,
      };
    case actionTypes.SET_SELECTED_PROJECT_TYPE:
      return {
        ...state,
        projectType: action.projectType,
      };
    default:
      return state;
  }
}