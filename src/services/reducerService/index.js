import { put, takeLatest, select } from "redux-saga/effects";
import {
  SET_ACTION_TYPES
} from '../actionTypesService/actionTypes';
import {
  setReducer,
} from './actions';

export function* watchSetActionTypesForReducer() {

  let reducer = [];
  const actionTypes = (yield select()).actionTypesServiceReducer.actionTypes;

  actionTypes.map(actionType => {
    reducer.push({
      isActive: false,
      name: actionType.name.toUpperCase(),
      payloadInfo: []
    });

    if (actionType.isSuccess) {
      reducer.push({
        isActive: false,
        name: `${actionType.name.toUpperCase()}_SUCCESS`,
        payloadInfo: []
      });
    }

    if (actionType.isFail) {
      reducer.push({
        isActive: false,
        name: `${actionType.name.toUpperCase()}_FAIL`,
        payloadInfo: []
      });
    }
  });

  yield put(setReducer(reducer));
}

export default function* rootReducer() {
  yield takeLatest(SET_ACTION_TYPES, watchSetActionTypesForReducer);
}
