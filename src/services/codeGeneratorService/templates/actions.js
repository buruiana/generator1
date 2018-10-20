export const actionsTemplate =
`
import * as actionTypes from './actionTypes';

{{#actions}}
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

{{/actions}}
`;
