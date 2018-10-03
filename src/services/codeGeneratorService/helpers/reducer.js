import {
  renderReducerImports,
  renderReducerInitState,
  renderReducerExport,
} from '../constants';

export const generateReducerCode = reducer => {
  let reducerCode = '';

  reducerCode += renderReducerImports();
  reducerCode += renderReducerInitState(reducer);
  reducerCode += renderReducerExport(reducer);

  return reducerCode;
}



