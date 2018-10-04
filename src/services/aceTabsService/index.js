import { put, takeLatest, select } from "redux-saga/effects";
import {
  SET_PROJECT_SETTINGS_TYPE,
} from '../projectSettingsService/actionTypes';
import {
  setAceTabs,
} from './actions';

export function* watchSetProjectSettings() {
  const projectType = (yield select()).projectSettingsServiceReducer.projectType;
  const tabs = projectType === 'Service'
    ? ['index', 'reducer', 'actions', 'actionTypes']
    : ['index', 'xxx']

  yield put(setAceTabs(tabs));
}

export default function* rootSaga() {
  yield takeLatest(SET_PROJECT_SETTINGS_TYPE, watchSetProjectSettings);
}
