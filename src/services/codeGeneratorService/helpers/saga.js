import {
  renderSagaImport,
  renderActionTypesImport,
  renderSagaWatchers,
  renderSagaExport,
} from '../constants';

export const generateSagaCode = saga => {
  let sagaCode = '';

  sagaCode += renderSagaImport();
  sagaCode += renderActionTypesImport(saga);
  sagaCode += renderSagaWatchers(saga);
  sagaCode += renderSagaExport(saga);

  return sagaCode;
}



