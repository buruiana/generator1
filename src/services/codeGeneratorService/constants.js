export const renderActions = (action, payloadVal, payload1) => (
`export const ${action.name} = ${payloadVal} => ({
  type: ${action.actionType},
\u0009${payload1}
});\n\n`
);

export const renderActionTypesSuccess = actionType => (
  `export const ${actionType.name.toUpperCase()}_SUCCESS = '${actionType.name.toUpperCase()}_SUCCESS';\n`
);

export const renderActionTypesFail = actionType => (
  `export const ${actionType.name.toUpperCase()}_FAIL = '${actionType.name.toUpperCase()}_FAIL';\n`
);

export const renderActionTypes = actionType => (
  `export const ${actionType.name.toUpperCase()} = '${actionType.name.toUpperCase()}';\n`
);

export const renderSagaImport = () => (
  `import { put, takeLatest, select } from "redux-saga/effects";\n\n`
);

export const renderActionTypesImport = saga => {
  const start = `import {\n`
  const end = '} from "./actionTypes";';
  let actionTypesCode = '';
  saga.map(s => {
    if (s.isActive) {
      actionTypesCode += s.name + ',\n';
    }
    //return actionTypesCode;
  });
  return `${start}${actionTypesCode}${end}'\n\n`;
};

export const renderSagaWatchers = saga => {
  let watchersCode = '';
  saga.map(s => {
    if (s.isActive) {
      watchersCode += `export function* ${s.watcher}() {}\n`;
    }
    //return watchersCode;
  });
  return watchersCode + '\n\n';
};

export const renderSagaExport = saga => {
  let exportCode = 'export default function* rootSaga() {\n';
  saga.map(s => {
    if (s.isActive) {
      exportCode += `\u0009yield takeLatest(${s.name}, ${s.watcher})\n`;
    }
    //return exportCode;
  });
  return exportCode + '}\n\n';
};

export const renderReducerImports = () => (
  `import * as actionTypes from './actionTypes';\n\n`
);

export const renderReducerInitState = reducer => {
  let initState = 'export const initialState = () => ({\n';

  reducer.map(s => {
    if (s.isActive) {
      initState += `\u0009${s.payload}: ${s.initVal},\n`;
    }
  });
  initState += '});\n\n';
  return initState;
};

export const renderReducerExport = reducer => {
  let red =
  `export default (state = initialState(), action) => {
  switch (action.type) {\n`;

  reducer.map(s => {
    if (s.isActive) {
      red += `    case actionTypes.${s.name}:
      return {
        ...state,
        ${s.payload}: ${s.payloadVal}
      };\n`
    }
  });

  red += `    default:
      return state;
    }
  }
}`;
  return red;
};
