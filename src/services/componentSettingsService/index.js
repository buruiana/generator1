import { call, put, takeLatest, select } from "redux-saga/effects";

import {
  SET_PROJECT_SETTINGS_COMPONENT_TYPE,
} from '../projectSettingsService/actionTypes';
import { SMART, DUMB } from '../../utils/constants';
import {
  setSmartCode,
  setDumbCode,
  setHocCode,
} from '../codeGeneratorService/actions';
import {
  generateSmartCode,
} from '../codeGeneratorService/helpers/smart';
import {
  generateDumbCode,
} from '../codeGeneratorService/helpers/dumb';
import {
  generateHocCode,
} from '../codeGeneratorService/helpers/hoc';

export function* watchSetComponentType(action) {
  const { projectName } = (yield select()).projectSettingsServiceReducer;
  const { smart, dumb, hoc } = (yield select()).componentSettingsServiceReducer;
  const hocCode = generateHocCode({ hoc, projectName });
  switch (action.componentType) {
    case SMART:
      const smartCode = generateSmartCode({ smart, projectName });
      yield put(setHocCode(hocCode));
      yield put(setSmartCode(smartCode));
      return;
    case DUMB:
      const dumbCode = generateDumbCode({ dumb, projectName });
      yield put(setHocCode(hocCode));
      yield put(setDumbCode(dumbCode));
      return;

    default:
      return;
  }
}

export default function* rootSaga() {
  yield takeLatest(SET_PROJECT_SETTINGS_COMPONENT_TYPE, watchSetComponentType);
}