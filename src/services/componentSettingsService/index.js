import { put, takeLatest, select, call } from "redux-saga/effects";
import { getFlatDataFromTree } from 'react-sortable-tree';
import isEmpty from 'lodash/isEmpty';
import {
  SET_PROJECT_SETTINGS_COMPONENT_TYPE,
} from '../projectSettingsService/actionTypes';
import { SET_SMART_SETTINGS } from '../componentSettingsService/actionTypes';
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
  setAceTabs,
} from '../aceTabsService/actions';
import {
  setProjectHasJsonForm,
} from '../projectSettingsService/actions';
import { getPrettyCode } from '../../utils';

export function* watchSetComponentType(action) {
  const { projectName, componentType, hasJsonForm } = (yield select()).projectSettingsServiceReducer;
  const { smart, dumb, hoc } = (yield select()).componentSettingsServiceReducer;
  const { tree } = (yield select()).sortableTreeServiceReducer;
  const hocCode = generateHocCode({ hoc, projectName });
  const stylesCode = generateStylesCode(tree);

  let code = '';

  switch (componentType) {
    case SMART:
      const smartCode = generateSmartCode({ smart, projectName, tree, hasJsonForm });
      code = yield call(getPrettyCode, smartCode);

      yield put(setHocCode(hocCode));
      yield put(setSmartCode(code));
      yield put(setStylesCode(stylesCode));
      return;
    case DUMB:
      const dumbCode = generateDumbCode({ dumb, projectName, tree, hasJsonForm });
      code = yield call(getPrettyCode, dumbCode);

      yield put(setHocCode(hocCode));
      yield put(setDumbCode(code));
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
  const flatData = getFlatDataFromTree({
    treeData: tree,
    getNodeKey: ({ treeIndex }) => treeIndex,
    ignoreCollapsed: false,
  });
  const hasJsonSchema = !isEmpty(flatData.find(el => el.node.provider === 'Jsonschema-form'));
  const { aceTabs } = (yield select()).aceTabsServiceReducer

  if (hasJsonSchema) {
    const newAceTabs = [...aceTabs];
    const hasAllTabs = newAceTabs.find(tab => tab === 'schema');
    if (isEmpty(hasAllTabs)) {
      newAceTabs.push('schema', 'uiSchema');
    }

    yield put(setAceTabs(newAceTabs));
  } else {
    const newAceTabs = aceTabs.filter(tab => tab !== 'schema' && tab !== 'uiSchema' );
    yield put(setAceTabs(newAceTabs));
  }

  let code = '';
  switch (componentType) {
    case SMART:
      const smartCode = generateSmartCode({ smart, projectName, tree, hasJsonSchema });
      code = yield call(getPrettyCode, smartCode);

      yield put(setSmartCode(code));
      yield put(setStylesCode(stylesCode));
      yield put(setAceTab(projectName));
      yield put(setProjectHasJsonForm(hasJsonSchema));

      return;

    case DUMB:
      const dumbCode = generateDumbCode({ dumb, projectName, tree, hasJsonSchema });
      code = yield getPrettyCode(dumbCode);

      yield put(setDumbCode(code));
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
  yield takeLatest([TREE_SET, SET_SMART_SETTINGS], watchTreeSet);
}