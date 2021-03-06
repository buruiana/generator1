import * as actionTypes from './actionTypes';
import { model } from './model';

export const initialState = () => ({
  settings: {},
  tree: model,
  code: '',
  file: '',
  generateApp: false,
  codeDone: false,
});

export default (state = initialState(), action) => {
  switch (action.type) {
    case actionTypes.SET_APP_SETTINGS:
      return {
        ...state,
        settings: action.settings
      };
    case actionTypes.SET_APP_TREE:
      return {
        ...state,
        tree: action.tree
      };
    case actionTypes.SET_APP_CODE:
      return {
        ...state,
        code: action.code
      };
    case actionTypes.SET_APP_CODE_DONE:
      return {
        ...state,
        codeDone: action.codeDone
      };
    case actionTypes.SET_APP_FILE:
      return {
        ...state,
        file: action.file
      };
    case actionTypes.SET_GENERATE_APP:
      return {
        ...state,
        generateApp: action.generateApp
      };
    default:
      return state;
  }
}