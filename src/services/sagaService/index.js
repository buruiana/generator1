import { put, takeLatest, select } from "redux-saga/effects";
import {
  SET_ACTIONS
} from '../actionsService/actionTypes';
import {
  setSaga,
} from './actions';

export function* watchSetActions() {

  let saga = [];
  const actions = (yield select()).actionsServiceReducer.actions;

  actions.map(action => {
    let object = [];

    if (action.isActive) {
      object = {
        isActive: false,
        name: action.name,
        watcher: '',
      }
      saga.push(object);
    }
  });
  yield put(setSaga(saga));
}

export default function* rootSaga() {
  yield takeLatest(SET_ACTIONS, watchSetActions);
}
