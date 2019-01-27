import { call, put, takeLatest, select } from "redux-saga/effects";
import {
  INIT_APP
} from '../configsService/actionTypes';
import {
  SET_PROP_TYPE,
  DELETE_PROP_TYPE,
} from './actionTypes';
import {
  setAllPropTypes,
} from './actions';
import { initApp } from '../configsService/actions';
import { initProject } from '../projectSettingsService/actions';
import reduxSagaFirebase from '../../redux/firebaseConfig';
import { boxArray } from '../../utils';
import { mock } from './__mocks__';

export function* watchGetAllPropTypes() {
  let allPropTypes = [];
  const { isOffline } = (yield select()).configsServiceReducer;

  if (isOffline) {
    allPropTypes = mock.allPropTypes;
  } else {
    const snapshot = yield call(reduxSagaFirebase.firestore.getCollection, 'propTypes');
    allPropTypes = snapshot.docs.map(propType => {
      return { ...propType.data(), id: propType.id };
    });
  };
  yield put(setAllPropTypes(boxArray(allPropTypes)));
}

export function* watchSetPropType(action) {
  const { propType } = action;
  const { isOffline } = (yield select()).configsServiceReducer;

  if (!isOffline) {
    if (propType.id) {
      yield call(
        reduxSagaFirebase.firestore.setDocument,
        `propTypes/${propType.id}`,
        propType
      );
    } else {
      yield call(
        reduxSagaFirebase.firestore.addDocument,
        `propTypes`,
        propType
      );
    }
    yield put(initApp());
    yield put(initProject());
  }
}

export function* watchDeletePropType(action) {
  const { id } = action.propType;
  const { isOffline } = (yield select()).configsServiceReducer;

  if (!isOffline) {
    yield call(reduxSagaFirebase.firestore.deleteDocument, `propTypes/${id}`);
    yield put(initApp());
    yield put(initProject());
  }
}

export default function* rootSaga() {
  yield takeLatest(INIT_APP, watchGetAllPropTypes);
  yield takeLatest(SET_PROP_TYPE, watchSetPropType);
  yield takeLatest(DELETE_PROP_TYPE, watchDeletePropType);
}