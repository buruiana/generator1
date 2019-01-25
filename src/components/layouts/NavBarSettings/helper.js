import isEmpty from 'lodash/isEmpty';
import {
  SERVICE,
  COMPONENT,
  SMART,
  APPLICATION,
} from '../../../utils/constants';

export const isService = projectType => {
  return projectType === SERVICE
    ? true
    : false;
};

export const isComponent = projectType => {
  return projectType === COMPONENT
    ? true
    : false;
};

export const isApp = projectType => {
  return projectType === APPLICATION
    ? true
    : false;
};

export const isSmart = (projectType, componentType) => {
  return (projectType === COMPONENT && componentType === SMART)
    ? true
    : false;
};

export const hasActionTypes = actionTypes => !isEmpty(actionTypes);