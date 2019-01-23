import { call, takeLatest, select, put } from "redux-saga/effects";
import { setAppCode } from '../appSettingsService/actions';
import {
  SET_APP_SETTINGS,
} from '../appSettingsService/actionTypes';
import {
  generateAppBE,
} from '../../utils/index';

export function* watchSetAppSettings() {
  const appSettings = (yield select()).appSettingsServiceReducer;
  const { projectName, projectDestination  } = (yield select()).projectSettingsServiceReducer;
  const flatSettings = flatten(appSettings.settings);

  let filtered = [];
  filtered.push(projectName);
  filtered.push(projectDestination);
  Object.keys(flatSettings).forEach(key => {
    if (flatSettings[key]) filtered.push(key);
  });

  yield call(generateAppBE, filtered);
}

const flatten = object => {
  return Object.assign({}, ...function _flatten(objectBit, path = '') {
    return [].concat(
      ...Object.keys(objectBit).map(
        key => typeof objectBit[key] === 'object'
          ? _flatten(objectBit[key], `$${key}`)
          : ({ [`${key}`]: objectBit[key] })
      )
    )
  }(object));
};

export default function* rootSaga() {
  yield takeLatest(SET_APP_SETTINGS, watchSetAppSettings);
}
