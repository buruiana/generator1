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
      name: actionType.name,
      payload: '',
      payloadVal: '',
      payloadDefaultVal: '',
    });

    if (actionType.isSuccess) {
      reducer.push({
        isActive: false,
        name: `${actionType.name.toUpperCase()}_SUCCESS`,
        payload: '',
        payloadVal: '',
        payloadDefaultVal: '',
      });
    }

    if (actionType.isFail) {
      reducer.push({
        isActive: false,
        name: `${actionType.name.toUpperCase()}_FAIL`,
        payload: '',
        payloadVal: '',
        payloadDefaultVal: '',
      });
    }
  });

  yield put(setReducer(reducer));
}

export default function* rootReducer() {
  yield takeLatest(SET_ACTION_TYPES, watchSetActionTypesForReducer);
}
