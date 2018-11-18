import { smartTemplate } from '../templates/smart';
import { childrenPartial } from '../templates/childrenPartial';
import { propsPartial } from '../templates/propsPartial';
import { getConstList } from './helper';

const Mustache = require('mustache');

export const generateSmartCode = props => {
  const smart = { ...props.smart, projectName: props.projectName, tree: props.tree };
  const constList = getConstList(props.tree);

  const data = {
    smart,
    constList,
    hasConstructor: () => this.hasConstructor,
    hasState: () => this.hasState,
    lifeCycleMethods: () => this.lifeCycleMethods,
    projectName: () => this.projectName,
    tree: () => this.tree,
    componentProps: () => this.componentProps,
  };

  return Mustache.render(smartTemplate, data, {
    "childrenPartial": childrenPartial,
    "propsPartial": propsPartial,
  });
}