import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router'
import counterReducer from '../../services/counterService/reducer';

export default (history) => combineReducers({
  router: connectRouter(history),
  counterReducer,
});
