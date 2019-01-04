import isEmpty from 'lodash/isEmpty';
import { getConstList, getImportList } from './helper';

export const generateDumbCode = props => {
  let code = '';
  const constList = getConstList(props.tree);
  const importsList = getImportList(props.tree);

  const data = {
    dumb,
    constList,
    importsList,
    projectName: () => this.projectName,
    tree: () => this.tree,
    componentProps: () => this.componentProps,
  };

  return generateDumbCode;
}


export const dumbTemplate = `
{{#dumb}}
import React from 'react';
{{>importPartial}}
{{#hasJsonForm}}
import schema from './schema';
import uiSchema from './uiSchema';
{{/hasJsonForm}}
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