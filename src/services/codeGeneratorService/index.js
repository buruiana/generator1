import { put, takeLatest, select } from "redux-saga/effects";
import {
  SET_ACTION_TYPES,
} from '../actionTypesService/actionTypes';
import {
  SET_ACTIONS,
} from '../actionsService/actionTypes';
import {
  setActionTypesCode,
  setActionsCode,
} from './actions';
import {
  generateActionTypesCode,
} from '../codeGeneratorService/helpers/actionTypes';
import {
  generateActionsCode,
} from '../codeGeneratorService/helpers/actions';
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

export default function* rootSaga() {
  yield takeLatest(SET_ACTION_TYPES, watchSetActionTypes);
  yield takeLatest(SET_ACTIONS, watchSetActions);
}