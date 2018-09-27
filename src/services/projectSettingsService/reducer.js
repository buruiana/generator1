import * as actionTypes from '../projectSettingsService/actionTypes';

export const initialState = () => ({
  projectName: '',
  projectType: '',
  projectTechno: '',
  componentType: '',
});

export default (state = initialState(), action) => {
  switch (action.type) {
    case actionTypes.SET_PROJECT_SETTINGS_NAME:
      return {
        ...state,
        projectName: action.projectName,
      };
    case actionTypes.SET_PROJECT_SETTINGS_TYPE:
      return {
        ...state,
        projectType: action.projectType,
      };
    case actionTypes.SET_PROJECT_SETTINGS_TECHNO:
      return {
        ...state,
        projectTechno: action.projectTechno,
      };
    case actionTypes.SET_PROJECT_SETTINGS_COMPONENT_TYPE:
      return {
        ...state,
        componentType: action.componentType,
      };
    default:
      return state;
  }
}