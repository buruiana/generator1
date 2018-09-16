import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import componentsServiceReducer from '../../services/componentsService/reducer';
import modalServiceReducer from '../../services/modalService/reducer';
import sortableTreeServiceReducer from '../../services/sortableTreeService/reducer';

export const reducers = combineReducers({
  routing: routerReducer,
  componentsServiceReducer,
  modalServiceReducer,
  sortableTreeServiceReducer,
});
