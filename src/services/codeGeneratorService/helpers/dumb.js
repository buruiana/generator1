import isEmpty from 'lodash/isEmpty';
import reverse from 'lodash/reverse';
import {
  getFlatDataFromTree,
} from 'react-sortable-tree';
import { getConstList, getImportList } from './helper';

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
  console.log('console: flatData', flatData);

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
  code += `const ${props.projectName} = props => {\n`;

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
  code += prepareTree(flatData);


  code += ` );\n`;

  code += `};\n\n`;
  code += `export default ${props.projectName};`;

  return code;
}

const prepareTree = flatTree => {
  let code = '';
  let parentsList = [];
  let elIdx = 0;

  const getTree = tree => {
    tree.map(el => {
      console.log('console: current', el.node.title);
      const currentId = el.node.id;
      const nextEl = (tree.length > elIdx + 1)
        ? tree[elIdx + 1]
        : null;
      console.log('console: nextEl', nextEl);
      const hasChildren = !isEmpty(el.node.children);
      const hasParent = !isEmpty(el.parentNode);
      const closeTag = hasChildren
        ? '>'
        : ' />';

      //console.log('console: currentId', currentId);

      if (hasChildren) parentsList.push(el.node.title);
      console.log('console: parentsList', parentsList);


      code += `<${el.node.title}${closeTag}`;

      // set the parent data
      if (hasParent) {
        const currentParentId = el.parentNode.id;
        const currentParent = tree.filter(el => el.node.id === currentParentId);
        const currentParentLastChild = (el.parentNode.children.length > 1)
          ? el.parentNode.children[el.parentNode.children.length - 1].id
          : el.parentNode.children[0].id;


        console.log('console: currentParentId', currentParentId);
        console.log('console: currentParent', currentParent);

        // check if current element is the last child
        if (currentId === currentParentLastChild && !hasChildren) {
          code += `</ ${parentsList[parentsList.length - 1]}>`;
          parentsList.pop();
        }
        console.log('console: parentsList1', parentsList);

        // check next elemen path
        if (!isEmpty(nextEl) && (currentParent[0].path.length > nextEl.path.length)) {
          console.log('console: ------', currentParent[0].path.length, nextEl.path.length);
          code += `</ ${parentsList[parentsList.length - 1]}>`;
          parentsList.pop();
        }
        console.log('console: parentsList2', parentsList);
      }

      elIdx++;
      return code;
    });

    // close remaining parents
    if (parentsList.length) {
      reverse(parentsList).map(el => {
        code += `</ ${el}>`;
      });
    }
    console.log('console: in closure1111', code);
    return code;
  };

  code += getTree(flatTree);

  console.log('console: on exit', code);
  return code;
};
