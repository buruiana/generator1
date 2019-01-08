import { call, takeLatest, select } from "redux-saga/effects";
import {
  SET_APP_SETTINGS,
} from '../appSettingsService/actionTypes';
import {
  generateAppBE,
} from '../../utils/index';

export function* watchSetAppSettings() {
  const appSettings = (yield select()).appSettingsServiceReducer;
  const flatSettings = flatten(appSettings.settings);

  let filtered = [];
  Object.keys(flatSettings).forEach(key => {
    if (flatSettings[key]) filtered.push(key);
  });

  const code = yield call(generateAppBE, filtered);
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
