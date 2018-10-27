export const dumbTemplate = `
{{#dumb}}
import React from 'react';

const {{projectName}} = props => {

  return (
    {{#tree}}
    {{^hasComponentPropsVals}}{{^hasChildren}}<{{title}} />{{/hasChildren}}{{/hasComponentPropsVals}}
    {{#hasChildren}}{{^hasComponentPropsVals}}<{{title}}>{{/hasComponentPropsVals}}{{/hasChildren}}
    {{#hasComponentPropsVals}}<{{title}}{{/hasComponentPropsVals}}
    {{#componentProps}}{{#val}}
      {{name}}={ {{val}} }{{/val}}
    {{/componentProps}}
    {{#hasComponentPropsVals}}/>{{/hasComponentPropsVals}}
    {{#children}}
      {{^hasComponentPropsVals}}<{{title}} />{{/hasComponentPropsVals}}{{#hasComponentPropsVals}}<{{title}}{{/hasComponentPropsVals}}
      {{>propsPartial}}
      {{#hasComponentPropsVals}}/>{{/hasComponentPropsVals}}
        {{>childrenPartial}}
    {{/children}}
    {{#hasChildren}}</ {{title}}>{{/hasChildren}}
    {{/tree}}
  );
}

export default {{projectName}};
{{/dumb}}
`;