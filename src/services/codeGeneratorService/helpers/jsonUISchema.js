import isEmpty from 'lodash/isEmpty';
import {
  getFlatDataFromTree,
} from 'react-sortable-tree';

export const generateJsonUISchemaCode = props => {
  const { jsonForm } = props;
  let code = '';

  const flatData = getFlatDataFromTree({
    treeData: jsonForm,
    getNodeKey: ({ treeIndex }) => treeIndex,
    ignoreCollapsed: false,
  });

  code += `const uiSchema = {\n`;
  const prepareJsonFormCode = jsonForm => {
    jsonForm.map(el => {
      if (el.title) {
        let isChild = false;
        let isLastChild = false;
        let parent = null;

        const flatElement = flatData.find(element => element.node.title === el.title);

        if (!isEmpty(flatElement)) {
          parent = flatElement.parentNode;
        }

        if (!isEmpty(parent)) {
          isChild = !isEmpty(parent.children);
          isLastChild = isChild
            ? parent.children[parent.children.length - 1].title === el.title
            : false;
        }

        code += `${el.title}: {`;

        if (el.type === 'array') code += `items: {\n`;
        if (el.type === 'object') {
          code += `properties: {\n`;
        }

        if (!isEmpty(el.children)) prepareJsonFormCode(el.children);



        console.log('console: el', el);
        console.log('console: parent', parent);
        console.log('console: isLastChild', isLastChild);
        // if (!isEmpty(parent) && (parent.type === 'array' || parent.type === 'object') && el.title) code += `}o,\n`;
        // if (isEmpty(el.children)) code += `}a,\n`; // properties

        // if (!isEmpty(parent)) code += `}b,\n`;
        // if (el.type === 'object' && (isLastChild || isEmpty(el.children))) code += `}c,\n`;
        // if (isEmpty(parent)) code += `}d;\n`;

        if (el.type === 'array' || el.type === 'object') code += `},\n`; // properties
        if (el.type === 'array' || el.type === 'object') code += `},\n`; // object

        if (isLastChild) code += `};\n`;
        code += `},\n`;
      };
    });
    code += `};\n`;
    return code;
  };

  return prepareJsonFormCode(jsonForm);
};
