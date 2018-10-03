import { put, takeLatest, select } from "redux-saga/effects";
import {
  SET_ACTION_TYPES
} from '../actionTypesService/actionTypes';
import {
  setSaga,
} from './actions';

export function* watchSetActionTypes() {

  let saga = [];
  const actionTypes = (yield select()).actionTypesServiceReducer.actionTypes;

  actionTypes.map(action => {
    saga.push({
      isActive: false,
      name: action.name,
      watcher: '',
    });

    if (action.isSuccess) {
      saga.push({
        isActive: false,
        name: `${action.name.toUpperCase()}_SUCCESS`,
        watcher: '',
      });
    }

    if (action.isFail) {
      saga.push({
        isActive: false,
        name: `${action.name.toUpperCase()}_FAIL`,
        watcher: ''
      });
    }
  });
  yield put(setSaga(saga));
}

export default function* rootSaga() {
  yield takeLatest(SET_ACTION_TYPES, watchSetActionTypes);
}
