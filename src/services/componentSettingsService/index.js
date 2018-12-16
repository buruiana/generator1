import { put, takeLatest, select } from "redux-saga/effects";

import some from 'lodash/some';
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
import { 
  setProjectHasJsonForm,
} from '../projectSettingsService/actions';

export function* watchSetComponentType(action) {
  const { projectName, componentType } = (yield select()).projectSettingsServiceReducer;
  const { smart, dumb, hoc } = (yield select()).componentSettingsServiceReducer;
  const { tree } = (yield select()).sortableTreeServiceReducer;
  const hocCode = generateHocCode({ hoc, projectName });
  const stylesCode = generateStylesCode(tree);

  const myRe = /^[ \r\n]+$/gi;

  switch (componentType) {
    case SMART:
      const smartCode = generateSmartCode({ smart, projectName, tree });

      yield put(setHocCode(hocCode));
      yield put(setSmartCode(smartCode.replace(myRe, '')));
      yield put(setStylesCode(stylesCode));
      return;
    case DUMB:
      const dumbCode = generateDumbCode({ dumb, projectName, tree });

      yield put(setHocCode(hocCode));
      yield put(setDumbCode(dumbCode.replace(myRe, '')));
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
  const myRe = /^[ \r\n]+$/gi;
  const hasJsonSchema = some(tree, { title: 'Form', provider: 'Jsonschema-form' });

  switch (componentType) {
    case SMART:
      const smartCode = generateSmartCode({ smart, projectName, tree }).replace(/(^[ \t]*\n)/gm, "");

      yield put(setSmartCode(smartCode.replace(myRe, '')));
      yield put(setStylesCode(stylesCode));
      yield put(setAceTab(projectName));
      yield put(setProjectHasJsonForm(hasJsonSchema));
      return;

    case DUMB:
      const dumbCode = generateDumbCode({ dumb, projectName, tree }).replace(/(^[ \t]*\n)/gm, "");

      yield put(setDumbCode(dumbCode.replace(myRe, '')));
      yield put(setStylesCode(stylesCode));
      yield put(setAceTab(projectName));
      yield put(setProjectHasJsonForm(hasJsonSchema));
      return;

    default:
      return;
  }
}

export default function* rootSaga() {
  yield takeLatest(SET_PROJECT_SETTINGS_COMPONENT_TYPE, watchSetComponentType);
  yield takeLatest(TREE_SET, watchTreeSet);
}