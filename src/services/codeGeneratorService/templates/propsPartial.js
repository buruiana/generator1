export const propsPartial = `
{{#componentProps}}
    {{#.}}{{#val}}
        {{name}}={ {{val}} }
    {{/val}}{{/.}}
    {{/componentProps}}
`;