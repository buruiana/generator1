import isEmpty from 'lodash/isEmpty';
import { getConstList, getImportList } from './helper';

export const generateDumbCode = props => {
  let code = '';
  const constList = getConstList(props.tree);
  const importsList = getImportList(props.tree);
  console.log('console: props', props);
  console.log('console: constList', constList);

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
  code += ` <div></div>`;
  code += ` );\n`;

  code += `};\n\n`;
  code += `export default ${props.projectName};`;

  return code;
}


// export const dumbTemplate = `
// {{#dumb}}
// import React from 'react';
// {{>importPartial}}
// {{#hasJsonForm}}
// import schema from './schema';
// import uiSchema from './uiSchema';
// {{/hasJsonForm}}
// const {{projectName}} = props => {
//   {{#constList}}
//   const {{.}} = () => {
//     return null;
//   };

//   {{/constList}}
//   return (
//     {{#tree}}
//     {{^closeTag}}{{^hasComponentPropsVals}}{{^hasChildren}}<{{title}} />{{/hasChildren}}{{/hasComponentPropsVals}}{{/closeTag}}{{#hasChildren}}{{^closeTag}}{{^hasComponentPropsVals}}<{{title}}>{{/hasComponentPropsVals}}{{/closeTag}}{{/hasChildren}}{{#closeTag}}{{^hasComponentPropsVals}}<{{title}}>{{/hasComponentPropsVals}}{{/closeTag}}
//     {{#hasComponentPropsVals}}<{{title}}{{/hasComponentPropsVals}}
//     {{#componentProps}}{{#val}}
//       {{name}}={{{val}}}{{/val}}
//     {{/componentProps}}
//     {{#hasComponentPropsVals}}>{{/hasComponentPropsVals}}
//     {{#children}}
//       {{^closeTag}}{{^hasComponentPropsVals}}{{^hasChildren}}<{{title}} />{{/hasChildren}}{{/hasComponentPropsVals}}{{/closeTag}}{{#hasChildren}}{{^closeTag}}{{^hasComponentPropsVals}}<{{title}}>{{/hasComponentPropsVals}}{{/closeTag}}{{/hasChildren}}{{#closeTag}}{{^hasComponentPropsVals}}<{{title}}>{{/hasComponentPropsVals}}{{/closeTag}}
//       {{#hasComponentPropsVals}}<{{title}}{{/hasComponentPropsVals}}
//       {{>propsPartial}}
//       {{#hasComponentPropsVals}}>{{/hasComponentPropsVals}}
//         {{>childrenPartial}}
//       {{^closeTag}}{{#hasChildren}}</ {{title}}>{{/hasChildren}}{{/closeTag}}{{#closeTag}}</ {{title}}>{{/closeTag}}
//     {{/children}}
//     {{^closeTag}}{{#hasChildren}}</ {{title}}>{{/hasChildren}}{{/closeTag}}{{#closeTag}}</ {{title}}>{{/closeTag}}
//     {{/tree}}
//   );
// }

// export default {{projectName}};
// {{/dumb}}
// `;