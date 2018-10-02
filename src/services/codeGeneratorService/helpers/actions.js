export const generateActionsCode = actions => {
  let actionsCode = {};

  let importsCode = '';
  let exportsCode = '';
  const importsCodeStart = 'import {\n';
  const importsCodeEnd = "} from './actionTypes'\n";

  actions.map(action => {

    if (action.isActive) {
      exportsCode +=
        `export function ${action.name} ( ${action.payload} ) {
        return {
          type: ${action.actionType},
          ${action.payload}
        }
      };\n\n`;

      importsCode += `	${action.actionType.toUpperCase()},\n`;
    }
  });

  return {
    exportsCode,
    importsCode: importsCodeStart + importsCode + importsCodeEnd
  };
};