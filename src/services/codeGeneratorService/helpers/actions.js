import { actionsTemplate } from '../templates/actions';

const Mustache = require('mustache');

export const generateActionsCode = actions => {
  const data = {
    actions,
    name: () => this.name,
    isActive: () => this.isActive,
    actionType: () => this.actionType,
    payload: () => this.payload,
  };

  return Mustache.render(actionsTemplate, data);
}