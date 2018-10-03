import { put, takeLatest, select } from "redux-saga/effects";
import {
  SET_ACTION_TYPES
} from '../actionTypesService/actionTypes';
import {
  setSaga,
} from './actions';

export function* watchSetActionTypesForSaga() {

  let saga = [];
  const actionTypes = (yield select()).actionTypesServiceReducer.actionTypes;

  actionTypes.map(actionType => {
    saga.push({
      isActive: false,
      name: actionType.name,
      watcher: '',
    });

    if (actionType.isSuccess) {
      saga.push({
        isActive: false,
        name: `${actionType.name.toUpperCase()}_SUCCESS`,
        watcher: '',
      });
    }

    if (actionType.isFail) {
      saga.push({
        isActive: false,
        name: `${actionType.name.toUpperCase()}_FAIL`,
        watcher: ''
      });
    }
  });
  yield put(setSaga(saga));
}

export default function* rootSaga() {
  yield takeLatest(SET_ACTION_TYPES, watchSetActionTypesForSaga);
}
