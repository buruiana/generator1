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

  if (!isEmpty(jsonForm) && jsonForm[0].title) code += `export default uiSchema = {\n`;
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

        if (!isEmpty(uiSchema.uiMore.uiDisabled)) code += `minimum: ${el.minimum},\n`;
        if (!isEmpty(uiSchema.uiMore.uiEnumDisabled)) code += `minimum: ${el.minimum},\n`;
        if (!isEmpty(uiSchema.uiMore.uiInline)) code += `minimum: ${el.minimum},\n`;
        if (!isEmpty(uiSchema.uiMore.uiReadonly)) code += `minimum: ${el.minimum},\n`;


        if (!isEmpty(uiSchema.uiOptions.backgroundColor)) code += `minimum: ${el.minimum},\n`;
        if (!isEmpty(uiSchema.uiOptions.classNames)) code += `minimum: ${el.minimum},\n`;
        if (!isEmpty(uiSchema.uiOptions.inputType)) code += `minimum: ${el.minimum},\n`;
        if (!isEmpty(uiSchema.uiOptions.label)) code += `minimum: ${el.minimum},\n`;
        if (!isEmpty(uiSchema.uiOptions.rows)) code += `minimum: ${el.minimum},\n`;

        if (!isEmpty(uiSchema.uiOthers.uiAutofocus)) code += `minimum: ${el.minimum},\n`;
        if (!isEmpty(uiSchema.uiOthers.uiDescription)) code += `minimum: ${el.minimum},\n`;
        if (!isEmpty(uiSchema.uiOthers.uiHelp)) code += `minimum: ${el.minimum},\n`;
        if (!isEmpty(uiSchema.uiOthers.uiPlaceholder)) code += `minimum: ${el.minimum},\n`;
        if (!isEmpty(uiSchema.uiOthers.uiTitle)) code += `minimum: ${el.minimum},\n`;

        if (!isEmpty(uiSchema.uiWidget.uiHidden)) code += `minimum: ${el.minimum},\n`;
        if (!isEmpty(uiSchema.uiWidget.widget)) code += `"ui:widget": ${el.minimum},\n`;

        if (
          (!isEmpty(parent) && (parent.type === 'array' || parent.type === 'object') && !isLastChild && !isEmpty(parent.children))
          || (isEmpty(parent) && !isEmpty(el.children))
          || ((!isEmpty(parent) && !isLastChild) || (!isEmpty(parent) && isEmpty(el.children) && !isLastChild) && (parent.type !== 'array' || parent.type !== 'object'))
        ) {
          code += `},// close field\n`;
        }


        if (
          (el.type === 'array' || el.type === 'object') && isLastChild //|| (!isEmpty(parent) && isEmpty(parent.children))
        ) {
          code += `}, //lastChild\n`;
        }

        if (
          (isEmpty(parent)
            && el.title === jsonForm[0].title) ||
          (!isEmpty(parent) &&
            isLastChild &&
            (el.type === 'array' || el.type === 'object')
          )
        ) {
          code += `}, // close props\n`;
        }

        if (
          isEmpty(parent) &&
          (el.type === 'array' || el.type === 'object') //&& !isEmpty(el.children)
        ) {
          code += `}, //closeobj\n`;
        }

        if (isEmpty(parent)) code += `}; // close const\n`;
      };
    });

    return code;
  };

  return prepareJsonFormCode(jsonForm);
};
