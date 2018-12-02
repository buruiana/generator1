export const propsPartial = `
    {{#componentProps}}{{#val}}
    {{#.}}{{#val}}
        {{name}}={{{val}}}
    {{/val}}{{/.}}
    {{/val}}{{/componentProps}}
`;