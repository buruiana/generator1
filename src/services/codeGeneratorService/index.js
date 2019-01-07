import { put, takeLatest, select, call } from "redux-saga/effects";
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
  SET_PROJECT_SETTINGS_JSON_FORM
} from '../projectSettingsService/actionTypes';
import {
  setActionTypesCode,
  setActionsCode,
  setSagaCode,
  setReducerCode,
  setHocCode,
  setSmartCode,
  setJsonFormSchemaCode,
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
  generateJsonFormCode,
} from '../codeGeneratorService/helpers/jsonForm';
import {
  setAceTab,
} from '../aceTabsService/actions';

import {
  ACE_TABS,
} from '../../utils/constants';
import { boxArray, getPrettyCode } from '../../utils';

export function* watchSetActionTypes() {
  const { actionTypes } = (yield select()).serviceSettingsServiceReducer;
  const actionTypesCode = generateActionTypesCode(boxArray(actionTypes));
  const code = yield call(getPrettyCode, actionTypesCode);

  yield put(setActionTypesCode(code));
  yield put(setAceTab(ACE_TABS.ACTION_TYPES));
}

export function* watchSetActions() {
  const { actions } = (yield select()).serviceSettingsServiceReducer;
  const actionsCode = generateActionsCode(boxArray(actions));
  const code = yield call(getPrettyCode, actionsCode);

  yield put(setActionsCode(code));
  yield put(setAceTab(ACE_TABS.ACTIONS));
}

export function* watchSetSaga() {
  const { saga } = (yield select()).serviceSettingsServiceReducer;
  const sagaCode = generateSagaCode(boxArray(saga));
  const code = yield call(getPrettyCode, sagaCode);

  yield put(setSagaCode(code));
  yield put(setAceTab(ACE_TABS.INDEX));
}

export function* watchSetReducer() {
  const { reducer } = (yield select()).serviceSettingsServiceReducer;
  const reducerCode = generateReducerCode(boxArray(reducer));
  const code = yield call(getPrettyCode, reducerCode);

  yield put(setReducerCode(code));
  yield put(setAceTab(ACE_TABS.REDUCER));
}

export function* watchSetHoc() {
  const { hoc } = (yield select()).componentSettingsServiceReducer;
  const { projectName } = (yield select()).projectSettingsServiceReducer;
  const hocCode = generateHocCode({ hoc, projectName });
  const code = yield call(getPrettyCode, hocCode);

  yield put(setHocCode(code));
  yield put(setAceTab(ACE_TABS.INDEX));
}

export function* watchSetSmartSettings() {
  const { smart } = (yield select()).componentSettingsServiceReducer;
  const { projectName } = (yield select()).projectSettingsServiceReducer;
  const { tree } = (yield select()).sortableTreeServiceReducer;
  const smartCode = generateSmartCode({ smart, projectName, tree });

  const code = yield call(getPrettyCode, smartCode);
  yield put(setSmartCode(code));
}

export function* watchSetJsonForm() {
  const { jsonForm } = (yield select()).projectSettingsServiceReducer;
  const jsonFormSchemaCode = generateJsonFormCode({ jsonForm });
  const code = yield call(getPrettyCode, jsonFormSchemaCode);
  yield put(setJsonFormSchemaCode(code));
}

export default function* rootSaga() {
  yield takeLatest(SET_ACTION_TYPES, watchSetActionTypes);
  yield takeLatest(SET_ACTIONS, watchSetActions);
  yield takeLatest(SET_SAGA, watchSetSaga);
  yield takeLatest(SET_REDUCER, watchSetReducer);
  yield takeLatest(SET_HOC, watchSetHoc);
  yield takeLatest(SET_SMART_SETTINGS, watchSetSmartSettings);
  yield takeLatest(SET_PROJECT_SETTINGS_JSON_FORM, watchSetJsonForm);
}