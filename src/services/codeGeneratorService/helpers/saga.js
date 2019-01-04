import isEmpty from 'lodash/isEmpty';

export const generateSagaCode = saga => {
  let code = '';
  const hasActiveSaga = !isEmpty(saga.find(el => el.isActive));

  if (hasActiveSaga) {
    code += `import { call, put, takeLatest, select } from "redux-saga/effects";\n`;
    code += `import {\n`;
    saga.map(el => {
      if (el.isActive) {
        code += ` ${el.name},\n`;
      }
    });
    code += `} from './actionTypes';\n\n`;

    saga.map(el => {
      if (el.isActive) {
        code += `export function* ${el.watcher}(action) {}\n\n`;
      }
    });

    code += `export default function* rootSaga() {\n`;
    saga.map(el => {
      if (el.isActive) {
        code += ` yield takeLatest(${el.name}, ${el.watcher});\n`;
      }
    });
    code += `}`;
  }

  return code;
}
