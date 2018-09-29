import { put, takeLatest, select } from "redux-saga/effects";
import {
  SET_ACTIONS
} from '../actionsService/actionTypes';
import {
  setReducer,
} from './actions';

export function* watchSetActionsForReducer() {

  let reducer = [];
  const actions = (yield select()).actionsServiceReducer.actions;

  actions.map(action => {
    let object = [];

    if (action.isActive) {
      object = {
        isActive: false,
        name: action.name,
        payload: '',
        payloadVal: '',
        payloadDefaultVal: '',
      }
      reducer.push(object);
    }
  });
  yield put(setReducer(reducer));
}

export default function* rootReducer() {
  yield takeLatest(SET_ACTIONS, watchSetActionsForReducer);
}
