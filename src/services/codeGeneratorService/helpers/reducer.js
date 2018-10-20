import { reducerTemplate } from '../templates/reducer';

const Mustache = require('mustache');

export const generateReducerCode = reducer => {
  const data = {
    reducer,
    name: () => this.name,
    isActive: () => this.isActive,
    payloadInfo: () => this.payloadInfo,
  };

  return Mustache.render(reducerTemplate, data);
}