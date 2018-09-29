import { put, takeLatest, select } from "redux-saga/effects";
import {
  SET_ACTION_TYPES
} from '../actionTypesService/actionTypes';
import {
  setActions,
} from './actions';
import { capitalizeWord } from '../../utils';

export function* watchSetActionTypes() {

  let actions = [];
  const actionTypes = (yield select()).actionTypesServiceReducer.actionTypes;

  actionTypes.map(actionType => {
    let object = {
      isActive: false,
      name: `set${capitalizeWord(actionType.name)}`
    };
    actions.push(object);

    if (actionType.isSuccess) {
      object = {
        isActive: false,
        name: `set${capitalizeWord(actionType.name)}Success`
      }
      actions.push(object);
    }

    if (actionType.isFail) {
      object = {
        isActive: false,
        name: `set${capitalizeWord(actionType.name)}Fail`
      }
      actions.push(object);
    }
  });
  console.log('console: before', actions);
  yield put(setActions(actions));
  console.log('console: after', );
}

export default function* rootSaga() {
  yield takeLatest(SET_ACTION_TYPES, watchSetActionTypes);
}
