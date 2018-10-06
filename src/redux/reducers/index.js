import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import componentsServiceReducer from '../../services/componentsService/reducer';
import modalServiceReducer from '../../services/modalService/reducer';
import sortableTreeServiceReducer from '../../services/sortableTreeService/reducer';
import configsServiceReducer from '../../services/configsService/reducer';
import providersServiceReducer from '../../services/providersService/reducer';
import projectSettingsServiceReducer from '../../services/projectSettingsService/reducer';
import propTypesServiceReducer from '../../services/propTypesService/reducer';
import actionTypesServiceReducer from '../../services/actionTypesService/reducer';
import actionsServiceReducer from '../../services/actionsService/reducer';
import sagaServiceReducer from '../../services/sagaService/reducer';
import reducerServiceReducer from '../../services/reducerService/reducer';
import codeGeneratorServiceReducer from '../../services/codeGeneratorService/reducer';
import aceTabsServiceReducer from '../../services/aceTabsService/reducer';
import hocServiceReducer from '../../services/hocService/reducer';

export const reducers = combineReducers({
  routing: routerReducer,
  componentsServiceReducer,
  modalServiceReducer,
  sortableTreeServiceReducer,
  configsServiceReducer,
  providersServiceReducer,
  projectSettingsServiceReducer,
  propTypesServiceReducer,
  actionTypesServiceReducer,
  actionsServiceReducer,
  sagaServiceReducer,
  reducerServiceReducer,
  codeGeneratorServiceReducer,
  aceTabsServiceReducer,
  hocServiceReducer,
});
