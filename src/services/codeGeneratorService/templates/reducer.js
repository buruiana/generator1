export const reducerTemplate =
`import * as actionTypes from './actionTypes';

export const initialState = () => ({
{{#reducer}}
{{#payloadInfo}}
{{#initVal}}
  {{payload}}: {{initVal}},
{{/initVal}}
{{/payloadInfo}}
{{/reducer}}
});

export default (state = initialState(), action) => {
  switch (action.type) {
  {{#reducer}}
  {{#isActive}}
    case actionTypes.{{name}}:
      return {
        ...state,
        {{#payloadInfo}}
        {{payload}}: {{payloadVal}},
        {{/payloadInfo}}
      };
  {{/isActive}}
  {{/reducer}}
    default:
      return state;
  }
}`;