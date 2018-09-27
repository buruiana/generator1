import { call, put, takeLatest, select } from "redux-saga/effects";
import {
  GET_ALL_PROJECT_TYPES,
  SET_PROJECT_TYPE,
  DELETE_PROJECT_TYPE,
} from './actionTypes';
import {
  setAllProjectTypes,
  getAllProjectTypes,

} from './actions';
import reduxSagaFirebase from '../../redux/firebaseConfig';
import { mock } from './__mocks__';
import { boxArray } from '../../utils';

export function* watchGetAllProjectTypes() {
  let allProjectTypes = [];
  const configs = (yield select()).configsServiceReducer.configs;

  if (configs.isOffline) {
    allProjectTypes = mock.allProjectTypes;
  } else {
    const snapshot = yield call(reduxSagaFirebase.firestore.getCollection, 'projectTypes');
    allProjectTypes = snapshot.docs.map(projectType => {
      return { ...projectType.data(), id: projectType.id };
    });
  };
  yield put(setAllProjectTypes(boxArray(allProjectTypes)));
}

export function* watchSetProjectType() {
  const projectType = (yield select()).projectTypesServiceReducer.projectType;
  const configs = (yield select()).configsServiceReducer.configs;

  if (!configs.isOffline) {
    if (projectType.id) {
      yield call(
        reduxSagaFirebase.firestore.setDocument,
        `projectTypes/${projectType.id}`,
        projectType
      );
    } else {
      yield call(
        reduxSagaFirebase.firestore.addDocument,
        `projectTypes`,
        projectType
      );
    }
    yield put(getAllProjectTypes());
  }
}

export function* watchDeleteProjectType() {
  const { id } = (yield select()).projectTypesServiceReducer.projectType;
  const configs = (yield select()).configsServiceReducer.configs;

  if (!configs.isOffline) {
    yield call(reduxSagaFirebase.firestore.deleteDocument, `projectTypes/${id}`);
    yield put(getAllProjectTypes());
  }
}

export default function* rootSaga() {
  yield takeLatest(GET_ALL_PROJECT_TYPES, watchGetAllProjectTypes);
  yield takeLatest(SET_PROJECT_TYPE, watchSetProjectType);
  yield takeLatest(DELETE_PROJECT_TYPE, watchDeleteProjectType);
}