import isEmpty from 'lodash/isEmpty';

export const generateActionsCode = actions => {
  const hasActiveActions = !isEmpty(actions.find(el => el.isActive));
  let code = '';
  if (hasActiveActions) {
    code = `import * as actionTypes from './ actionTypes';\n\n`;

    actions.map(el => {
      if (el.isActive) {
        code = code + `export const ${el.name} = `;
        if (!isEmpty(el.payload) && el.payload.length === 1) {
          code = code + ` ${el.payload[0].payload}`;
        } else if (!isEmpty(el.payload) && el.payload.length > 1) {
          code = code + `(\n`;

          el.payload.map(payloadEl => {
            code = code + `${payloadEl.payload},\n`;
          });
          code = code + `)`;
        } else {
          code = code + `()`;
        }
        code = code + ` => ({\n`;
        code = code + ` type: actionTypes.${el.actionType},\n`;
        el.payload.map(payloadEl => {
          code = code + ` ${payloadEl.payload},\n`;
        });

        code = code + `});\n\n`;
      }
    });
  }

  return code;
}
