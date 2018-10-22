export const childrenPartial = `
      {{#children}}
        {{^hasComponentPropsVals}}<{{title}} />{{/hasComponentPropsVals}}
        {{#hasComponentPropsVals}}<{{title}}{{/hasComponentPropsVals}}
          {{>propsPartial}}
     {{#hasComponentPropsVals}}/>{{/hasComponentPropsVals}}
      {{>childrenPartial}}
      {{/children}}
`;