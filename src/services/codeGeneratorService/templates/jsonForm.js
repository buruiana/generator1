export const jsonFormTemplate = `
const schema = {
  {{#jsonForm}}
  {{#isPrimitive}}
  {{title}}: { type: '{{type}}', title: '{{title}}', default: '{{default}}' },
  {{/isPrimitive}}
  {{#isObject}}
  type: 'object',
  properties: {
  {{#hasChildren}}
  {{#children}}
  {{#isPrimitive}}
    {{title}}: { type: '{{type}}', title: '{{title}}', default: '{{default}}' },
  {{/isPrimitive}}

  {{#isObject}}
  type: 'object',
  properties: {
  {{#hasChildren}}
  {{#children}}
  {{#isPrimitive}}
      {{title}}: { type: '{{type}}', title: '{{title}}', default: '{{default}}' },
  {{/isPrimitive}}
  {{/children}}
  {{/hasChildren}}
  },
  {{/isObject}}

  {{/children}}
  {{/hasChildren}}
  },
    {{/isObject}}
  {{#isArray}}
  type: "array",
    items: {
    {{#hasChildren}}
    {{#children}}
    {{#isPrimitive}}
      {{title}}: { type: '{{type}}', title: '{{title}}', default: '{{default}}' },
    {{/isPrimitive}}
      {{#isObject}}
      type: 'object',
      properties: {
      {{#hasChildren}}
      {{#children}}
      {{#isPrimitive}}
        {{title}}: { type: '{{type}}', title: '{{title}}', default: '{{default}}' },
      {{/isPrimitive}}
      {{/children}}
      {{/hasChildren}}
      },
      {{/isObject}}
    {{/children}}
    {{/hasChildren}}
    },
  {{/isArray}}
  {{/jsonForm}}
}`;
