import { put, takeLatest, select } from "redux-saga/effects";
import {
  SET_ACTION_TYPES,
} from '../actionTypesService/actionTypes';
import {
  SET_ACTIONS,
} from '../actionsService/actionTypes';
import {
  SET_SAGA,
} from '../sagaService/actionTypes';
import {
  setActionTypesCode,
  setActionsCode,
  setSagaCode,
} from './actions';
import {
  generateActionTypesCode,
} from '../codeGeneratorService/helpers/actionTypes';
import {
  generateActionsCode,
} from '../codeGeneratorService/helpers/actions';
import {
  generateSagaCode,
} from '../codeGeneratorService/helpers/saga';
import { boxArray } from '../../utils';

export function* watchSetActionTypes() {
  const { actionTypes } = (yield select()).actionTypesServiceReducer;
  const actionTypesCode = generateActionTypesCode(boxArray(actionTypes));

  yield put(setActionTypesCode(actionTypesCode));
}

export function* watchSetActions() {
  const { actions } = (yield select()).actionsServiceReducer;
  const actionsCode = generateActionsCode(boxArray(actions));

  yield put(setActionsCode(actionsCode));
}

export function* watchSetSaga() {
  const { saga } = (yield select()).sagaServiceReducer;
  const sagaCode = generateSagaCode(boxArray(saga));

  yield put(setSagaCode(sagaCode));
}

export default function* rootSaga() {
  yield takeLatest(SET_ACTION_TYPES, watchSetActionTypes);
  yield takeLatest(SET_ACTIONS, watchSetActions);
  yield takeLatest(SET_SAGA, watchSetSaga);
}