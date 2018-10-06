import { renderActions } from '../renders';

export const generateActionsCode = actions => {
  let actionsCode = {};

  let importsCode = '';
  let exportsCode = '';
  const importsCodeStart = 'import {\n';
  const importsCodeEnd = "} from './actionTypes'\n\n";

  actions.map(action => {
    if (action.isActive) {
      const payloadList = action.payload.map(el => el.payload).toString();

      const payload1 = payloadList.split(',').join(',\n\u0009');

      exportsCode += renderActions(action, payloadList, payload1);
      importsCode += `	${action.actionType.toUpperCase()},\n`;
    }
  });

  return {
    exportsCode,
    importsCode: importsCodeStart + importsCode + importsCodeEnd
  };
};