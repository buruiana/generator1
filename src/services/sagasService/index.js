import { put, takeLatest, select } from "redux-saga/effects";
import {
  SET_ACTIONS
} from '../actionsService/actionTypes';
import {
  setSagas,
} from './actions';

export function* watchSetActions() {

  let sagas = [];
  const actions = (yield select()).actionsServiceReducer.actions;

  actions.map(action => {
    let object = [];

    if (action.isActive) {
      object = {
        isActive: false,
        name: action.name,
        val: '',
      }
      sagas.push(object);
    }
  });
  yield put(setSagas(sagas));
}

export default function* rootSaga() {
  yield takeLatest(SET_ACTIONS, watchSetActions);
}
