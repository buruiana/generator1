import { call, put, takeLatest, select } from "redux-saga/effects";
import {
  GET_ALL_PROP_TYPES,
  SET_PROP_TYPE,
  DELETE_PROP_TYPE,
} from './actionTypes';
import {
  setAllPropTypes,
  getAllPropTypes,

} from './actions';
import reduxSagaFirebase from '../../redux/firebaseConfig';
import { mock } from './__mocks__';
import { boxArray } from '../../utils';

export function* watchGetAllPropTypes() {
  let allPropTypes = [];
  const configs = (yield select()).configsServiceReducer.configs;

  if (configs.isOffline) {
    allPropTypes = mock.allPropTypes;
  } else {
    const snapshot = yield call(reduxSagaFirebase.firestore.getCollection, 'propTypes');
    allPropTypes = snapshot.docs.map(propType => {
      return { ...propType.data(), id: propType.id };
    });
  };
  yield put(setAllPropTypes(boxArray(allPropTypes)));
}

export function* watchSetPropType() {
  const propType = (yield select()).propTypesServiceReducer.propType;
  const configs = (yield select()).configsServiceReducer.configs;

  if (!configs.isOffline) {
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
    yield put(getAllPropTypes());
  }
}

export function* watchDeletePropType() {
  const { id } = (yield select()).propTypesServiceReducer.propType;
  const configs = (yield select()).configsServiceReducer.configs;

  if (!configs.isOffline) {
    yield call(reduxSagaFirebase.firestore.deleteDocument, `propTypes/${id}`);
    yield put(getAllPropTypes());
  }
}

export default function* rootSaga() {
  yield takeLatest(GET_ALL_PROP_TYPES, watchGetAllPropTypes);
  yield takeLatest(SET_PROP_TYPE, watchSetPropType);
  yield takeLatest(DELETE_PROP_TYPE, watchDeletePropType);
}