import isEmpty from 'lodash/isEmpty';
import capitalize from 'lodash/capitalize';
import {
  getFlatDataFromTree,
} from 'react-sortable-tree';
import { getConstList, getImportList, getTree } from './helper';


export const generateDumbCode = props => {
  let code = '';
  const constList = getConstList(props.tree);
  const importsList = getImportList(props.tree);

  const flatData = getFlatDataFromTree({
    treeData: props.tree,
    getNodeKey: ({ treeIndex }) => treeIndex,
    ignoreCollapsed: false,
  });
  if (isEmpty(flatData)) return null;

  // IMPORTS
  code += `import React from 'react';\n`;
  importsList.sortedDefaultImports.map(el => {
    code += `import ${el.node.title} from '${el.node.componentImport}';\n`;
  });
  if (props.hasJsonSchema) {
    code += `import schema from './schema';\n`;
    code += `import uiSchema from './uiSchema';\n`;
  }

  Object.keys(importsList.groupSortedNonDefaultImports).forEach(key => {
    code += `import {\n`;
    importsList.groupSortedNonDefaultImports[key].map(el => {
      code += `${el.node.title},\n`;
    });
    code += `} from '${importsList.groupSortedNonDefaultImports[key][0].node.providerPath}';\n`;
  });

  // START COMPONENT
  code += `\nconst ${capitalize(props.projectName)} = props => {\n`;

  // CONSTANTS
  if (!isEmpty(constList)) {
    constList.map(el => {
      code += ` const ${el} = () => {\n`;
      code += `   return null;\n`;
      code += ` };\n\n`;
    });
  }

  // RETURN
  code += ` return (\n`;
  code += getTree(flatData);
  code += ` );\n`;
  code += `};\n\n`;
  code += `export default ${capitalize(props.projectName)};`;

  return code;
}
