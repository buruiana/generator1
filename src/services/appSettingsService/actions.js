import * as actionTypes from './actionTypes';

export const setAppSettings = settings => {
  return {
    type: actionTypes.SET_APP_SETTINGS,
    settings
  };
}

export const setAppTree = tree => {
  return {
    type: actionTypes.SET_APP_TREE,
    tree
  };
}