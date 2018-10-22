export const dumbTemplate = `
{{#dumb}}
import React from 'react';

const {{projectName}} = props => {

  return (
    {{#tree}}
    {{^hasComponentPropsVals}}<{{title}} />{{/hasComponentPropsVals}}
    {{#hasComponentPropsVals}}<{{title}}{{/hasComponentPropsVals}}
    {{#componentProps}}{{#val}}
      {{name}}={ {{val}} }{{/val}}{{/componentProps}}
    {{#hasComponentPropsVals}}/>{{/hasComponentPropsVals}}
    {{#children}}
      {{^hasComponentPropsVals}}<{{title}} />{{/hasComponentPropsVals}}{{#hasComponentPropsVals}}<{{title}}{{/hasComponentPropsVals}}
      {{>propsPartial}}
      {{#hasComponentPropsVals}}/>{{/hasComponentPropsVals}}
        {{>childrenPartial}}
    s{{/children}}
    {{/tree}}
  );
}

export default {{projectName}};
{{/dumb}}
`;