import isEmpty from 'lodash/isEmpty';
import has from 'lodash/has';
import {
  getFlatDataFromTree,
} from 'react-sortable-tree';

// export const generateJsonUISchemaCode = props => {
//   const { jsonForm } = props;
//   let code = '';

//   const flatData = getFlatDataFromTree({
//     treeData: jsonForm,
//     getNodeKey: ({ treeIndex }) => treeIndex,
//     ignoreCollapsed: false,
//   });

//   if (!isEmpty(jsonForm) && jsonForm[0].title) code += `export default uiSchema = {\n`;
//   const prepareJsonFormCode = jsonForm => {
//     console.log('console: -----------------', jsonForm);

//     jsonForm.map(el => {
//       if (el.title) {
//         const { uiSchema } = el;
//         let isChild = false;
//         let isLastChild = false;
//         let parent = null;

//         const flatElement = flatData.find(element => element.node.title === el.title);

//         if (!isEmpty(flatElement)) {
//           parent = flatElement.parentNode;
//         }

//         if (!isEmpty(parent)) {
//           isChild = !isEmpty(parent.children);
//           isLastChild = isChild
//             ? parent.children[parent.children.length - 1].title === el.title
//             : false;
//         }

//         code += `${el.title}: {`;

//         if (el.type === 'array') code += `items: {\n`;
//         if (el.type === 'object') {
//           code += `properties: {\n`;
//         }


//         if (!isEmpty(el.children)) prepareJsonFormCode(el.children);

//         if (has(uiSchema, 'uiMore.uiDisabled') && uiSchema.uiMore.uiDisabled) code += `"ui:disabled": true,\n`;
//         if (has(uiSchema, 'uiMore.uiEnumDisabled') && uiSchema.uiMore.uiEnumDisabled) code += `"ui:enumDisabled": ${el.enumDisabled},\n`;
//         if (has(uiSchema, 'uiMore.uiReadonly') && uiSchema.uiMore.uiReadonly) code += `"ui:ui:readonly": true,\n`;


//         if (has(uiSchema, 'uiOptions.uiInline') && uiSchema.uiMore.uiInline) code += `minimum: ${el.minimum},\n`;
//         if (has(uiSchema, 'uiOptions.backgroundColor') && uiSchema.uiOptions.backgroundColor) code += `minimum: ${el.minimum},\n`;
//         if (has(uiSchema, 'uiOptions.classNames') && uiSchema.uiOptions.classNames) code += `minimum: ${el.minimum},\n`;
//         if (has(uiSchema, 'uiOptions.inputType') && uiSchema.uiOptions.inputType) code += `minimum: ${el.minimum},\n`;
//         if (has(uiSchema, 'uiOptions.label') && uiSchema.uiOptions.label) code += `minimum: ${el.minimum},\n`;
//         if (has(uiSchema, 'uiOptions.rows') && uiSchema.uiOptions.rows) code += `minimum: ${el.minimum},\n`;

//         if (has(uiSchema, 'uiOthers.uiAutofocus') && uiSchema.uiOthers.uiAutofocus) code += `minimum: ${el.minimum},\n`;
//         if (has(uiSchema, 'uiOthers.uiDescription') && uiSchema.uiOthers.uiDescription) code += `minimum: ${el.minimum},\n`;
//         if (has(uiSchema, 'uiOthers.uiHelp') && uiSchema.uiOthers.uiHelp) code += `minimum: ${el.minimum},\n`;
//         if (has(uiSchema, 'uiOthers.uiPlaceholder') && uiSchema.uiOthers.uiPlaceholder) code += `minimum: ${el.minimum},\n`;
//         if (has(uiSchema, 'uiOthers.uiTitle') && uiSchema.uiOthers.uiTitle) code += `minimum: ${el.minimum},\n`;

//         if (has(uiSchema, 'uiWidget.uiHidden') && uiSchema.uiWidget.uiHidden) code += `minimum: ${el.minimum},\n`;
//         if (has(uiSchema, 'uiWidget.widget') && uiSchema.uiWidget.widget) code += `"ui:widget": ${el.minimum},\n`;

//         if (
//           (!isEmpty(parent) && (parent.type === 'array' || parent.type === 'object') && !isLastChild && !isEmpty(parent.children))
//           || (isEmpty(parent) && !isEmpty(el.children))
//           || ((!isEmpty(parent) && !isLastChild) || (!isEmpty(parent) && isEmpty(el.children) && !isLastChild) && (parent.type !== 'array' || parent.type !== 'object'))
//         ) {
//           code += `},// close field\n`;
//         }


//         if (
//           (el.type === 'array' || el.type === 'object') && isLastChild //|| (!isEmpty(parent) && isEmpty(parent.children))
//         ) {
//           code += `}, //lastChild\n`;
//         }

//         if (
//           (isEmpty(parent)
//             && el.title === jsonForm[0].title) ||
//           (!isEmpty(parent) &&
//             isLastChild &&
//             (el.type === 'array' || el.type === 'object')
//           )
//         ) {
//           code += `}, // close props\n`;
//         }

//         if (
//           isEmpty(parent) &&
//           (el.type === 'array' || el.type === 'object') //&& !isEmpty(el.children)
//         ) {
//           code += `}, //closeobj\n`;
//         }

//         if (isEmpty(parent)) code += `}; // close const\n`;
//       };
//     });

//     return code;
//   };

//   return prepareJsonFormCode(jsonForm);
// };


export const generateJsonUISchemaCode = props => {
  const { jsonForm } = props;
  let code = '';

  const flatData = getFlatDataFromTree({
    treeData: jsonForm,
    getNodeKey: ({ treeIndex }) => treeIndex,
    ignoreCollapsed: false,
  });

  if (!isEmpty(jsonForm) && jsonForm[0].title) code += `export default schema = {\n`;

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

        if (isChild) {
          if (!isEmpty(el.title)) code += `${el.title}: { title: '${el.title}',`;
        } else {
          if (!isEmpty(el.title)) code += `title: '${el.title}',`;
        }

        if (!isEmpty(el.description)) code += `description: '${el.description}',\n`;
        if (!isEmpty(el.type)) code += `type: '${el.type}',\n`;


        if (el.type === 'array') code += `items: {\n`;
        if (el.type === 'object') {
          code += `properties: {\n`;
        }

        if (!isEmpty(el.children)) prepareJsonFormCode(el.children);


        if (!isEmpty(el.minimum)) code += `minimum: ${el.minimum},\n`;
        if (!isEmpty(el.maximum)) code += `maximum: ${el.maximum},\n`;
        if (!isEmpty(el.minLength)) code += `minLength: ${el.minLength},\n`;
        if (!isEmpty(el.maxLength)) code += `maxLength: ${el.maxLength},\n`;
        if (!isEmpty(el.minItems)) code += `minItems: ${el.minItems},\n`;
        if (!isEmpty(el.maxItems)) code += `maxItems: ${el.maxItems},\n`;
        if (!isEmpty(el.isRequired)) code += `isRequired: ${el.isRequired},\n`;
        if (!isEmpty(el.uniqueItems)) code += `uniqueItems: ${el.uniqueItems},\n`;
        if (!isEmpty(el.multipleOf)) code += `multipleOf: ${el.multipleOf},\n`;
        if (!isEmpty(el.enumVal)) code += `enum: ${el.enumVal},\n`;
        if (!isEmpty(el.enumNames)) code += `enumNames: ${el.enumNames},\n`;

        if (!isEmpty(parent) && (parent.type === 'array' || parent.type === 'object') && el.title) code += `},\n`;
        if ((el.type === 'array' || el.type === 'object') && isEmpty(el.children)) code += `},\n`;
        if (!isEmpty(parent) && isLastChild) code += `},\n`;
        if (isEmpty(parent)) code += `};\n`;
      }
    });

    return code;
  };

  return prepareJsonFormCode(jsonForm);
};