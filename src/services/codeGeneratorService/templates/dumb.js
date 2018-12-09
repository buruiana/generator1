export const dumbTemplate = `
{{#dumb}}
import React from 'react';

const {{projectName}} = props => {
  {{#constList}}
  const {{.}} = () => {
    return null;
  };

  {{/constList}}
  return (
    {{#tree}}
    {{^closeTag}}{{^hasComponentPropsVals}}{{^hasChildren}}<{{title}} />{{/hasChildren}}{{/hasComponentPropsVals}}{{/closeTag}}{{#hasChildren}}{{^closeTag}}{{^hasComponentPropsVals}}<{{title}}>{{/hasComponentPropsVals}}{{/closeTag}}{{/hasChildren}}{{#closeTag}}{{^hasComponentPropsVals}}<{{title}}>{{/hasComponentPropsVals}}{{/closeTag}}
    {{#hasComponentPropsVals}}<{{title}}{{/hasComponentPropsVals}}
    {{#componentProps}}{{#val}}
      {{name}}={{{val}}}{{/val}}
    {{/componentProps}}
    {{#hasComponentPropsVals}}>{{/hasComponentPropsVals}}
    {{#children}}
      {{^closeTag}}{{^hasComponentPropsVals}}{{^hasChildren}}<{{title}} />{{/hasChildren}}{{/hasComponentPropsVals}}{{/closeTag}}{{#hasChildren}}{{^closeTag}}{{^hasComponentPropsVals}}<{{title}}>{{/hasComponentPropsVals}}{{/closeTag}}{{/hasChildren}}{{#closeTag}}{{^hasComponentPropsVals}}<{{title}}>{{/hasComponentPropsVals}}{{/closeTag}}
      {{#hasComponentPropsVals}}<{{title}}{{/hasComponentPropsVals}}
      {{>propsPartial}}
      {{#hasComponentPropsVals}}>{{/hasComponentPropsVals}}
        {{>childrenPartial}}
      {{^closeTag}}{{#hasChildren}}</ {{title}}>{{/hasChildren}}{{/closeTag}}{{#closeTag}}</ {{title}}>{{/closeTag}}
    {{/children}}
    {{^closeTag}}{{#hasChildren}}</ {{title}}>{{/hasChildren}}{{/closeTag}}{{#closeTag}}</ {{title}}>{{/closeTag}}
    {{/tree}}
  );
}

export default {{projectName}};
{{/dumb}}
`;