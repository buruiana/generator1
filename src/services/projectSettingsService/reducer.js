import * as actionTypes from '../projectSettingsService/actionTypes';

export const initialState = () => ({
  projectName: '',
  projectType: '',
  projectTechno: '',
  componentType: '',
  projectDestination: '',
  hasJsonForm: false,
  err: '',
  jsonForm: [],
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
    case actionTypes.SET_PROJECT_DESTINATION:
      return {
        ...state,
        projectDestination: action.projectDestination,
      };
    case actionTypes.SET_PROJECT_SETTINGS_COMPONENT_TYPE:
      return {
        ...state,
        componentType: action.componentType,
      };
    case actionTypes.SET_PROJECT_SETTINGS_HAS_JSON_FORM:
      return {
        ...state,
        hasJsonForm: action.hasJsonForm,
      };
    case actionTypes.SET_PROJECT_SETTINGS_ERROR:
      return {
        ...state,
        err: action.err,
      };
    case actionTypes.SET_PROJECT_SETTINGS_JSON_FORM:
      return {
        ...state,
        jsonForm: action.jsonForm,
      };
    default:
      return state;
  }
}