import { put, takeLatest, select } from "redux-saga/effects";
import {
  SET_ACTION_TYPES,
  SET_ACTIONS,
  SET_SAGA,
  SET_REDUCER,
} from '../serviceSettingsService/actionTypes';
import {
  SET_HOC,
  SET_SMART_SETTINGS
} from '../componentSettingsService/actionTypes';
import {
  setActionTypesCode,
  setActionsCode,
  setSagaCode,
  setReducerCode,
  setHocCode,
  setSmartCode,
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
import {
  generateSmartCode,
} from '../codeGeneratorService/helpers/smart';
import { boxArray } from '../../utils';

export function* watchSetActionTypes() {
  const { actionTypes } = (yield select()).serviceSettingsServiceReducer;
  const actionTypesCode = generateActionTypesCode(boxArray(actionTypes));

  yield put(setActionTypesCode(actionTypesCode));
}

export function* watchSetActions() {
  const { actions } = (yield select()).serviceSettingsServiceReducer;
  const actionsCode = generateActionsCode(boxArray(actions));

  yield put(setActionsCode(actionsCode));
}

export function* watchSetSaga() {
  const { saga } = (yield select()).serviceSettingsServiceReducer;
  const sagaCode = generateSagaCode(boxArray(saga));

  yield put(setSagaCode(sagaCode));
}

export function* watchSetReducer() {
  const { reducer } = (yield select()).serviceSettingsServiceReducer;
  const reducerCode = generateReducerCode(boxArray(reducer));

  yield put(setReducerCode(reducerCode));
}

export function* watchSetHoc() {
  const { hoc } = (yield select()).componentSettingsServiceReducer;
  const { projectName } = (yield select()).projectSettingsServiceReducer;
  console.log('console: hochoc', hoc);
  const hocCode = generateHocCode(hoc, projectName);

  yield put(setHocCode(hocCode));
}

export function* watchSetSmartSettings() {
  const { smart } = (yield select()).componentSettingsServiceReducer;
  const smartCode = generateSmartCode(smart);

  yield put(setSmartCode(smartCode));
}

export default function* rootSaga() {
  yield takeLatest(SET_ACTION_TYPES, watchSetActionTypes);
  yield takeLatest(SET_ACTIONS, watchSetActions);
  yield takeLatest(SET_SAGA, watchSetSaga);
  yield takeLatest(SET_REDUCER, watchSetReducer);
  yield takeLatest(SET_HOC, watchSetHoc);
  yield takeLatest(SET_SMART_SETTINGS, watchSetSmartSettings);
}