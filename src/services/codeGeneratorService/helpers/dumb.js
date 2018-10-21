import { dumbTemplate } from '../templates/dumb';

const Mustache = require('mustache');

export const generateDumbCode = props => {
  const dumb = { ...props.dumb, projectName: props.projectName };
  const data = {
    dumb,
    projectName: () => this.projectName,
  };

  return Mustache.render(dumbTemplate, data);
}