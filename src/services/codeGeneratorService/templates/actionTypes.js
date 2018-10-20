export const actionTypesTemplate =
`{{#actionTypes}}
export const {{name}} = '{{name}}';
{{#isSuccess}}
export const {{name}}_SUCCESS = '{{name}}_SUCCESS';
{{/isSuccess}}
{{#isFail}}
export const {{name}}_FAIL = '{{name}}_FAIL';
{{/isFail}}
{{/actionTypes}}
`;