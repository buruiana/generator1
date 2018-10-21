export const actionsTemplate =
`
{{#actions}}
{{#isActive}}
import * as actionTypes from './actionTypes';

export const set{{name}} = (
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
