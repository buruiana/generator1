<<<<<<< HEAD
import {
  renderSagaImport,
  renderActionTypesImport,
  renderSagaWatchers,
  renderSagaExport,
} from '../renders';
import { sagaTemplate } from '../templates/saga';

const Mustache = require('mustache');

export const generateSagaCode = saga => {
  const data = {
    saga,
    name: () => this.name,
    watcher: () => this.watcher,
    isActive: () => this.isActive,
   };

  return Mustache.render(sagaTemplate, data);
}



