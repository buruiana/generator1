import isEmpty from 'lodash/isEmpty';
import {
  getFlatDataFromTree,
} from 'react-sortable-tree';
import {
  getConstList,
  getImportList,
  getTree,
  getLifeCycleCode,
  getConstrunctor,
} from './helper';


export const generateSmartCode = props => {
  let code = '';
  const constList = getConstList(props.tree);
  const importsList = getImportList(props.tree);

  const flatData = getFlatDataFromTree({
    treeData: props.tree,
    getNodeKey: ({ treeIndex }) => treeIndex,
    ignoreCollapsed: false,
  });

  // IMPORTS
  code += `import React from 'react';\n`;
  importsList.sortedDefaultImports.map(el => {
    code += `import ${el.node.title} from '${el.node.componentImport}';\n`;
  });

  Object.keys(importsList.groupSortedNonDefaultImports).forEach(key => {
    code += `import {\n`;
    importsList.groupSortedNonDefaultImports[key].map(el => {
      code += `${el.node.title},\n`;
    });
    code += `} from '${importsList.groupSortedNonDefaultImports[key][0].node.providerPath}';\n`;
  });

  // START COMPONENT
  code += `\nclass ${props.projectName} extends Component {\n`;
  code += getConstrunctor(props.smart.hasConstructor, props.smart.hasState, constList)
  code += getLifeCycleCode(props.smart.lifeCycleMethods);
  code += ` render() {\n`;

  // CONSTANTS
  if (!isEmpty(constList)) {
    constList.map(el => {
      code += ` const ${el} = () => {\n`;
      code += `   return null;\n`;
      code += ` };\n\n`;
    });
  }


  // RETURN
  code += `   return (\n`;
  code += !isEmpty(flatData)
    ? getTree(flatData)
    : '<div />';

  code += `   );\n`;
  code += ` };\n\n`;
  code += `};\n\n`;
  code += `export default ${props.projectName};`;

  return code;
}
