import { renderActions } from '../constants';

export const generateActionsCode = actions => {
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
      exportsCode += renderActions(action, payloadVal, payload1);
      importsCode += `	${action.actionType.toUpperCase()},\n`;
    }
  });

  return {
    exportsCode,
    importsCode: importsCodeStart + importsCode + importsCodeEnd
  };
};