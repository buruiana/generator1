import * as actionTypes from './actionTypes';
import { model } from './model';

export const initialState = () => ({
  settings: {},
  tree: model
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
    default:
      return state;
  }
}