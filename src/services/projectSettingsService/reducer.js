import * as actionTypes from '../projectSettingsService/actionTypes';

export const initialState = () => ({
  projectName: '',
  projectType: '',
  projectTechno: '',
});

export default (state = initialState(), action) => {
  switch (action.type) {
    case actionTypes.SET_PROJECT_NAME:
      return {
        ...state,
        projectName: action.projectName,
      };
    case actionTypes.SET_PROJECT_TYPE:
      return {
        ...state,
        projectType: action.projectType,
      };
    case actionTypes.SET_PROJECT_TECHNO:
      return {
        ...state,
        projectTechno: action.projectTechno,
      };
    default:
      return state;
  }
}