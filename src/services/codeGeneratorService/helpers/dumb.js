import Mustache from 'mustache';
import { dumbTemplate } from '../templates/dumb';
import { childrenPartial } from '../templates/childrenPartial';
import { propsPartial } from '../templates/propsPartial';
import { importPartial } from '../templates/importPartial';
import { getConstList, getImportList } from './helper';

export const generateDumbCode = props => {
  const dumb = { ...props.dumb, projectName: props.projectName, tree: props.tree };
  const constList = getConstList(props.tree);
  const importsList = getImportList(props.tree);

  const data = {
    dumb,
    constList,
    importsList,
    projectName: () => this.projectName,
    tree: () => this.tree,
    componentProps: () => this.componentProps,
  };

  return Mustache.render(dumbTemplate, data, {
    "childrenPartial": childrenPartial,
    "propsPartial": propsPartial,
    "importPartial": importPartial,
  });
}