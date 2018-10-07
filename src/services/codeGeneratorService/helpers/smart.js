import {
  renderLifeCycleMethods,
  renderConstructor,
} from '../renders';

export const generateSmartCode = smart => {
  let smartCode = '';
  smartCode += renderConstructor(smart);
  smartCode += renderLifeCycleMethods(smart.lifeCycleMethods);

  return smartCode;
}



