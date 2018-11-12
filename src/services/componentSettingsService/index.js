import { put, takeLatest, select } from "redux-saga/effects";

import {
  SET_PROJECT_SETTINGS_COMPONENT_TYPE,
} from '../projectSettingsService/actionTypes';
import { TREE_SET } from '../sortableTreeService/actionTypes';
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
  const { projectName, componentType } = (yield select()).projectSettingsServiceReducer;
  const { smart, dumb, hoc } = (yield select()).componentSettingsServiceReducer;
  const { tree } = (yield select()).sortableTreeServiceReducer;
  const hocCode = generateHocCode({ hoc, projectName });

  switch (componentType) {
    case SMART:
      const smartCode = generateSmartCode({ smart, projectName, tree });
      yield put(setHocCode(hocCode));
      yield put(setSmartCode(smartCode));
      return;
    case DUMB:
      const dumbCode = generateDumbCode({ dumb, projectName, tree });
      yield put(setHocCode(hocCode));

      const myRe = /^[ \r\n]+$/gi;
      const dumbCode1 = dumbCode.replace(myRe, '');


      yield put(setDumbCode(dumbCode1));
      return;

    default:
      return;
  }
}

export function* watchTreeSet() {
  const { projectName, componentType } = (yield select()).projectSettingsServiceReducer;
  const { smart, dumb } = (yield select()).componentSettingsServiceReducer;
  const { tree } = (yield select()).sortableTreeServiceReducer;

  switch (componentType) {
    case SMART:
      const smartCode = generateSmartCode({ smart, projectName, tree });
      yield put(setSmartCode(smartCode));
      return;
    case DUMB:
      const dumbCode = generateDumbCode({ dumb, projectName, tree }); //.replace(/(^[ \t]*\n)/gm, "");
      yield put(setDumbCode(dumbCode));
      return;

    default:
      return;
  }
}

export default function* rootSaga() {
  yield takeLatest(SET_PROJECT_SETTINGS_COMPONENT_TYPE, watchSetComponentType);
  yield takeLatest(TREE_SET, watchTreeSet);
}