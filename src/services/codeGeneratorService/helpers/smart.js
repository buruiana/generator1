import { smartTemplate } from '../templates/smart';

const Mustache = require('mustache');

export const generateSmartCode = props => {
  const smart = { ...props.smart, projectName: props.projectName };
  const data = {
    smart,
    hasConstructor: () => this.hasConstructor,
    hasState: () => this.hasState,
    lifeCycleMethods: () => this.lifeCycleMethods,
    projectName: () => this.projectName,
  };

  return Mustache.render(smartTemplate, data);
}