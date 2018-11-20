export const actionsTemplate =
`
import * as actionTypes from './actionTypes';

{{#actions}}
{{#isActive}}
export const {{name}} = (
  {{#payload}}{{#.}}
  {{payload}},
  {{/.}}{{/payload}}
  ) => ({
  type: actionTypes.{{actionType}},
  {{#payload}}
  {{#.}}
  {{payload}},
  {{/.}}
  {{/payload}}
});
{{/isActive}}

{{/actions}}
`;
