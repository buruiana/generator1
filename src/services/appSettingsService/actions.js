import * as actionTypes from './actionTypes';

export const setAppSettings = settings => {
  return {
    type: actionTypes.SET_APP_SETTINGS,
    settings,
  };
}

export const setAppTree = tree => {
  return {
    type: actionTypes.SET_APP_TREE,
    tree
  };
}

export const setAppCode = code => {
  return {
    type: actionTypes.SET_APP_CODE,
    code
  };
}

export const setAppFile = file => {
  return {
    type: actionTypes.SET_APP_FILE,
    file
  };
}