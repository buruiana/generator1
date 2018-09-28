import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import componentsServiceReducer from '../../services/componentsService/reducer';
import modalServiceReducer from '../../services/modalService/reducer';
import sortableTreeServiceReducer from '../../services/sortableTreeService/reducer';
import configsServiceReducer from '../../services/configsService/reducer';
import providersServiceReducer from '../../services/providersService/reducer';
import projectSettingsServiceReducer from '../../services/projectSettingsService/reducer';
import propTypesServiceReducer from '../../services/propTypesService/reducer';

export const reducers = combineReducers({
  routing: routerReducer,
  componentsServiceReducer,
  modalServiceReducer,
  sortableTreeServiceReducer,
  configsServiceReducer,
  providersServiceReducer,
  projectSettingsServiceReducer,
  propTypesServiceReducer,
});
