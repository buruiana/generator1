import { put, takeLatest, select } from "redux-saga/effects";
import { SET_ACTION_TYPES } from '../actionTypesService/actionTypes';
import { SET_ACTIONS } from '../actionsService/actionTypes';
import { SET_SAGA } from '../sagaService/actionTypes';
import { SET_REDUCER } from '../reducerService/actionTypes';
import { SET_HOC } from '../hocService/actionTypes';
import {
  setActionTypesCode,
  setActionsCode,
  setSagaCode,
  setReducerCode,
  setHocCode,
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
import {
  generateReducerCode,
} from '../codeGeneratorService/helpers/reducer';
import {
  generateHocCode,
} from '../codeGeneratorService/helpers/hoc';
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

export function* watchSetReducer() {
  const { reducer } = (yield select()).reducerServiceReducer;
  const reducerCode = generateReducerCode(boxArray(reducer));

  yield put(setReducerCode(reducerCode));
}

export function* watchSetHoc() {
  const { hoc } = (yield select()).hocServiceReducer;
  const { projectName } = (yield select()).projectSettingsServiceReducer;
  const hocCode = generateHocCode(boxArray(hoc), projectName);

  yield put(setHocCode(hocCode));
}

export default function* rootSaga() {
  yield takeLatest(SET_ACTION_TYPES, watchSetActionTypes);
  yield takeLatest(SET_ACTIONS, watchSetActions);
  yield takeLatest(SET_SAGA, watchSetSaga);
  yield takeLatest(SET_REDUCER, watchSetReducer);
  yield takeLatest(SET_HOC, watchSetHoc);
}