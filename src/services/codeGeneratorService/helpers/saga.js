import {
  renderSagaImport,
  renderActionTypesImport,
  renderSagaWatchers,
  renderSagaExport,
} from '../renders';

export const generateSagaCode = saga => {
  let sagaCode = '';

  sagaCode += renderSagaImport();
  sagaCode += renderActionTypesImport(saga);
  sagaCode += renderSagaWatchers(saga);
  sagaCode += renderSagaExport(saga);

  return sagaCode;
}



