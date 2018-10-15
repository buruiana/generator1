import {
  renderSagaImport,
  renderActionTypesImport,
  renderSagaWatchers,
  renderSagaExport,
} from '../renders';
import { example } from '../templates/saga';

const Mustache = require('mustache');

export const generateSagaCode = saga => {
  let sagaCode = '';
  const saga1 = {
    saga,
    name: function () {
      return this.name;
    },
    watcher: function () {
      return this.watcher;
    },
  };
  sagaCode += renderSagaImport();
  sagaCode += renderActionTypesImport(saga);
  sagaCode += renderSagaWatchers(saga);
  sagaCode += renderSagaExport(saga);
  sagaCode += Mustache.render(example, saga1);

  return sagaCode;
}



