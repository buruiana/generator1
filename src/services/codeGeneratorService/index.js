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
import {
  setAceTab,
} from '../aceTabsService/actions';

import {
  ACE_TABS,
} from '../../utils/constants';
import { boxArray } from '../../utils';

export function* watchSetActionTypes() {
  const { actionTypes } = (yield select()).serviceSettingsServiceReducer;
  const actionTypesCode = generateActionTypesCode(boxArray(actionTypes));

  yield put(setActionTypesCode(actionTypesCode));
  yield put(setAceTab(ACE_TABS.ACTION_TYPES));
}

export function* watchSetActions() {
  const { actions } = (yield select()).serviceSettingsServiceReducer;
  const actionsCode = generateActionsCode(boxArray(actions));

  yield put(setActionsCode(actionsCode));
  yield put(setAceTab(ACE_TABS.ACTIONS));
}

export function* watchSetSaga() {
  const { saga } = (yield select()).serviceSettingsServiceReducer;
  const sagaCode = generateSagaCode(boxArray(saga));

  yield put(setSagaCode(sagaCode));
  yield put(setAceTab(ACE_TABS.INDEX));
}

export function* watchSetReducer() {
  const { reducer } = (yield select()).serviceSettingsServiceReducer;
  const reducerCode = generateReducerCode(boxArray(reducer));

  yield put(setReducerCode(reducerCode));
  yield put(setAceTab(ACE_TABS.REDUCER));
}

export function* watchSetHoc() {
  const { hoc } = (yield select()).componentSettingsServiceReducer;
  const { projectName } = (yield select()).projectSettingsServiceReducer;
  const hocCode = generateHocCode({ hoc, projectName });

  yield put(setHocCode(hocCode));
  yield put(setAceTab(ACE_TABS.INDEX));
}

export function* watchSetSmartSettings() {
  const myRe = /^[ \r\n]+$/gi;
  const { smart } = (yield select()).componentSettingsServiceReducer;
  const { projectName } = (yield select()).projectSettingsServiceReducer;
  const { tree } = (yield select()).sortableTreeServiceReducer;
  const smartCode = generateSmartCode({ smart, projectName, tree }).replace(/(^[ \t]*\n)/gm, "");

  yield put(setSmartCode(smartCode.replace(myRe, '')));
}

export default function* rootSaga() {
  yield takeLatest(SET_ACTION_TYPES, watchSetActionTypes);
  yield takeLatest(SET_ACTIONS, watchSetActions);
  yield takeLatest(SET_SAGA, watchSetSaga);
  yield takeLatest(SET_REDUCER, watchSetReducer);
  yield takeLatest(SET_HOC, watchSetHoc);
  yield takeLatest(SET_SMART_SETTINGS, watchSetSmartSettings);
}