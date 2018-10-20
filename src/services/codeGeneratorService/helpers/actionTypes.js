import { actionTypesTemplate } from '../templates/actionTypes';

const Mustache = require('mustache');

export const generateActionTypesCode = actionTypes => {
  const data = {
    actionTypes,
    name: () => this.name,
    isSuccess: () => this.isSuccess,
    isFail: () => this.isFail,
  };

  return Mustache.render(actionTypesTemplate, data);
}