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
  setStylesCode,
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
import {
  generateStylesCode,
} from '../codeGeneratorService/helpers/styles';
import {
  setAceTab,
} from '../aceTabsService/actions';

export function* watchSetComponentType(action) {
  const { projectName, componentType } = (yield select()).projectSettingsServiceReducer;
  const { smart, dumb, hoc } = (yield select()).componentSettingsServiceReducer;
  const { tree } = (yield select()).sortableTreeServiceReducer;
  const hocCode = generateHocCode({ hoc, projectName });
  const stylesCode = generateStylesCode(tree);

  switch (componentType) {
    case SMART:
      const smartCode = generateSmartCode({ smart, projectName, tree });

      yield put(setHocCode(hocCode));
      yield put(setSmartCode(smartCode));
      yield put(setStylesCode(stylesCode));
      return;
    case DUMB:
      const dumbCode = generateDumbCode({ dumb, projectName, tree });
      yield put(setHocCode(hocCode));

      const myRe = /^[ \r\n]+$/gi;
      const dumbCode1 = dumbCode.replace(myRe, '');

      yield put(setDumbCode(dumbCode1));
      yield put(setStylesCode(stylesCode));
      return;

    default:
      return;
  }
}

export function* watchTreeSet() {
  const { projectName, componentType } = (yield select()).projectSettingsServiceReducer;
  const { smart, dumb } = (yield select()).componentSettingsServiceReducer;
  const { tree } = (yield select()).sortableTreeServiceReducer;
  const stylesCode = generateStylesCode(tree);

  switch (componentType) {
    case SMART:
      const smartCode = generateSmartCode({ smart, projectName, tree }).replace(/(^[ \t]*\n)/gm, "");
      yield put(setSmartCode(smartCode));
      yield put(setStylesCode(stylesCode));
      yield put(setAceTab(projectName));
      return;
    case DUMB:
      const dumbCode = generateDumbCode({ dumb, projectName, tree }).replace(/(^[ \t]*\n)/gm, "");
      yield put(setDumbCode(dumbCode));
      yield put(setStylesCode(stylesCode));
      yield put(setAceTab(projectName));
      return;

    default:
      return;
  }
}

export default function* rootSaga() {
  yield takeLatest(SET_PROJECT_SETTINGS_COMPONENT_TYPE, watchSetComponentType);
  yield takeLatest(TREE_SET, watchTreeSet);
}