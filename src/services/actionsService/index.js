import { put, takeLatest, select } from "redux-saga/effects";
import camelCase from 'lodash/camelCase';
import {
  SET_ACTION_TYPES
} from '../actionTypesService/actionTypes';
import {
  setActions,
} from './actions';

export function* watchSetActionTypes() {

  let actions = [];
  const actionTypes = (yield select()).actionTypesServiceReducer.actionTypes;

  actionTypes.map(actionType => {

    let object = {
      isActive: false,
      name: `${camelCase(actionType.name)}`,
      actionType: actionType.name.toUpperCase(),
    };
    actions.push(object);

    if (actionType.isSuccess) {
      object = {
        isActive: false,
        name: `${camelCase(actionType.name)}Success`,
        actionType: `${actionType.name.toUpperCase()}_SUCCESS`,
      }
      actions.push(object);
    }

    if (actionType.isFail) {
      object = {
        isActive: false,
        name: `${camelCase(actionType.name)}Fail`,
        actionType: `${actionType.name.toUpperCase()}_FAIL`,
      }
      actions.push(object);
    }
  });
  yield put(setActions(actions));
}

export default function* rootSaga() {
  yield takeLatest(SET_ACTION_TYPES, watchSetActionTypes);
}
