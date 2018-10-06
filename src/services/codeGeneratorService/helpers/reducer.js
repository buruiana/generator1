import {
  renderReducerImports,
  renderReducerInitState,
  renderReducerExport,
} from '../renders';

export const generateReducerCode = reducer => {
  let reducerCode = '';

  reducerCode += renderReducerImports();
  reducerCode += renderReducerInitState(reducer);
  reducerCode += renderReducerExport(reducer);

  return reducerCode;
}



