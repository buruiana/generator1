import {
  renderSagaImport,
  renderActionTypesImport,
  renderSagaWatchers,
  renderSagaExport,
} from '../renders';
import { example } from '../templates/example';

const Mustache = require('mustache');

export const generateSagaCode = saga => {
  let sagaCode = '';
  const data = { title: 'Mr. Gregory' };

  sagaCode += renderSagaImport();
  sagaCode += renderActionTypesImport(saga);
  sagaCode += renderSagaWatchers(saga);
  sagaCode += renderSagaExport(saga);
  sagaCode += Mustache.render(example, data);

  return sagaCode;
}



