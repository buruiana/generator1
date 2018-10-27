import { dumbTemplate } from '../templates/dumb';
import { childrenPartial } from '../templates/childrenPartial';
import { propsPartial } from '../templates/propsPartial';

const Mustache = require('mustache');

export const generateDumbCode = props => {
  const dumb = { ...props.dumb, projectName: props.projectName, tree: props.tree };
  const data = {
    dumb,
    projectName: () => this.projectName,
    tree: () => this.tree,
    componentProps: () => this.componentProps,
  };

  return Mustache.render(dumbTemplate, data, {
    "childrenPartial": childrenPartial,
    "propsPartial": propsPartial,
  });
}