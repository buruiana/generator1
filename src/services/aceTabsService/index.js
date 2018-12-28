import { put, takeLatest, select } from "redux-saga/effects";
import {
  SET_PROJECT_SETTINGS_TYPE,
} from '../projectSettingsService/actionTypes';
import { TREE_SET } from '../sortableTreeService/actionTypes';
import { SERVICE } from '../../utils/constants';
import {
  setAceTabs,
} from './actions';

export function* watchSetProjectSettings() {
  const { projectType, projectName, hasJsonForm } = (yield select()).projectSettingsServiceReducer;
  const tabs = projectType === SERVICE
    ? ['index', 'reducer', 'actions', 'actionTypes']
    : ['index', projectName, 'styles']

  if (hasJsonForm) {
    tabs.push('schema', 'uiSchema');
  }

  yield put(setAceTabs(tabs));
}

export default function* rootSaga() {
  yield takeLatest([SET_PROJECT_SETTINGS_TYPE, TREE_SET], watchSetProjectSettings);
}
