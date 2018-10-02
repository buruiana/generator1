export const generateReducerCode = reducer => {
  let actionsCode = {};

  let importsCode = '';
  let exportsCode = '';
  const importsCodeStart = 'import {\n';
  const importsCodeEnd = "} from './actionTypes'\n";

  actions.map(action => {
    if (action.isActive) {
      const payload = action.payload || '';
      const payloadVal = (payload.includes(',') || payload === '')
        ? `(${payload})`
        : `${payload}`;

      const payload1 = payload.split(',').join(',\n\u0009')
      exportsCode +=
`export const ${action.name} = ${payloadVal} => ({
  type: ${action.actionType},
\u0009${payload1}
});\n\n`;

      importsCode += `	${action.actionType.toUpperCase()},\n`;
    }
  });

  return {
    exportsCode,
    importsCode: importsCodeStart + importsCode + importsCodeEnd
  };
};