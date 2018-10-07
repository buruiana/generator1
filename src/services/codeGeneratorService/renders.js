import capitalize from 'lodash/capitalize';
import includes from 'lodash/includes';

export const renderActions = (action, payloadList, payload1) => (`
export const ${action.name} = (${payloadList}) => ({
  type: ${action.actionType},
  ${payload1}
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
  });
  return `${start}${actionTypesCode}${end}'\n\n`;
};

export const renderSagaWatchers = saga => {
  let watchersCode = '';
  saga.map(s => {
    if (s.isActive) {
      watchersCode += `
export function* ${s.watcher}() {

}\n`;
    }
  });
  return watchersCode + '\n\n';
};

export const renderSagaExport = saga => {
  let exportCode = 'export default function* rootSaga() {\n';
  saga.map(s => {
    if (s.isActive) {
      exportCode += `\tyield takeLatest(${s.name}, ${s.watcher})\n`;
    }
  });
  return exportCode + '}\n\n';
};

export const renderReducerImports = () => (
  `import * as actionTypes from './actionTypes';\n\n`
);

export const renderReducerPayloadInit = reducerPayload => {
  return reducerPayload.payloadInfo.map(p => `\t${p.payload}: ${p.initVal},\n`).join('');
};

export const renderReducerPayloadVal = reducerPayload => {
  return reducerPayload.payloadInfo.map(p => `
        ${p.payload}: ${p.payloadVal},`).join('');
};

export const renderReducerInitState = reducer => {
  let initState = 'export const initialState = () => ({\n';

  reducer.map(s => {
    if (s.isActive) initState += renderReducerPayloadInit(s);
    return initState;
  });

  initState += '});\n\n';
  return initState;
};

export const renderReducerExport = reducer => {

  let red = `export default (state = initialState(), action) => {
  switch (action.type) {\n`;

  reducer.map(s => {
    if (s.isActive) {
      red += `\t\tcase actionTypes.${s.name}:
      return {
        ...state,${renderReducerPayloadVal(s)}
      };\n`
    }
  });

  red += `\t\tdefault:
      return state;
    }
  }
}`;
  return red;
};


export const renderHoc = (hoc, projectName) => {
  if (hoc.connectRedux) {
    const start = `
import ${capitalize(projectName)} from './${projectName}';
import { connect } from "react-redux";
import {  set${projectName} } from '../../../services/${projectName}Service/actions';`;

    let mapStateToProps = '';
  if (hoc.mapStateToProps) {
    mapStateToProps = `

const mapStateToProps = state => {(
  ${projectName}: state.${projectName}ServiceReducer.${projectName},
)};`;
  }

    let mapDispatchToProps = '';
    if (hoc.mapDispatchToProps) {
      mapDispatchToProps = `

const mapDispatchToProps = dispatch => {(
  set${capitalize(projectName)}: ${projectName} => dispatch(set${capitalize(projectName)}(${projectName})),
)};`;
    }
    const mapStateToPropsVar = (mapStateToProps.length !== 0)
      ? 'mapStateToProps' 
      : null;

    const mapDispatchToPropsVar = (mapDispatchToProps.length !== 0)
      ? 'mapDispatchToProps' 
      : null;

    const end = `\n\nexport default connect(${mapStateToPropsVar}, ${mapDispatchToPropsVar})(${capitalize(projectName)});`;

    return start + mapStateToProps + mapDispatchToProps + end;
  } else {
    return `import ${ capitalize(projectName) } from './${projectName}';

export default ${capitalize(projectName)};`;
  }
};

export const renderLifeCycleMethods = smart => {

  let lifeCycleMethods = '';

  if (smart['componentWillMount']) {
    lifeCycleMethods += `\tcomponentWillMount() {

  };\n\n`;
  }

  if (smart['componentDidMount']) {
    lifeCycleMethods += `\tcomponentDidMount() {

  };\n\n`;
  }

  if (smart['componentWillReceiveProps']) {
    lifeCycleMethods += `\tcomponentWillReceiveProps(nextProps) {

  };\n\n`;
  }

  if (smart['shouldComponentUpdate']) {
    lifeCycleMethods += `\tshouldComponentUpdate(nextProps,nextState) {

  }'\n\n`;
  }

  if (smart['componentWillUpdate']) {
    lifeCycleMethods += `\tcomponentWillUpdate(nextProps, nextState) {

  };\n\n`;
  }

  if (smart['componentDidUpdate']) {
    lifeCycleMethods += `\tcomponentDidUpdate(prevProps, prevState) {

  };\n\n`;
  }

  if (smart['componentWillUnmount']) {
    lifeCycleMethods += `\tcomponentWillUnmount() {

  };\n\n`;
  }
  return lifeCycleMethods;
};

export const renderState = state => {
  if (state) {
    return `\t\tthis.state = {};`;
  }
  return null;
};

export const renderConstructor = smart => {
  console.log('console: smartsmart', smart);
  if (smart.hasConstructor) {
    return `\tconstructor(props) {
    super(props);
  ${renderState(smart.hasState)}
	};\n\n`
  }
};