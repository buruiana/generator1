import { call, put, takeLatest, select } from "redux-saga/effects";
import {
  GET_ALL_TECHNOS,
  SET_TECHNO,
  DELETE_TECHNO,
} from './actionTypes';
import {
  setAllTechnos,
  getAllTechnos,

} from './actions';
import reduxSagaFirebase from '../../redux/firebaseConfig';
import { mock } from './__mocks__';
import { boxArray } from '../../utils';

export function* watchGetAllTechnos() {
  let allTechnos = [];
  const configs = (yield select()).configsServiceReducer.configs;

  if (configs.isOffline) {
    allTechnos = mock.allTechnos;
  } else {
    const snapshot = yield call(reduxSagaFirebase.firestore.getCollection, 'technos');
    allTechnos = snapshot.docs.map(techno => {
      return { ...techno.data(), id: techno.id };
    });
  };
  yield put(setAllTechnos(boxArray(allTechnos)));
}

export function* watchSetTechno() {
  const techno = (yield select()).technosServiceReducer.techno;
  const configs = (yield select()).configsServiceReducer.configs;

  if (!configs.isOffline) {
    if (techno.id) {
      yield call(
        reduxSagaFirebase.firestore.setDocument,
        `technos/${techno.id}`,
        techno
      );
    } else {
      yield call(
        reduxSagaFirebase.firestore.addDocument,
        `technos`,
        techno
      );
    }
    yield put(getAllTechnos());
  }
}

export function* watchDeleteTechno() {
  const { id } = (yield select()).technosServiceReducer.techno;
  const configs = (yield select()).configsServiceReducer.configs;

  if (!configs.isOffline) {
    yield call(reduxSagaFirebase.firestore.deleteDocument, `technos/${id}`);
    yield put(getAllTechnos());
  }
}

export default function* rootSaga() {
  yield takeLatest(GET_ALL_TECHNOS, watchGetAllTechnos);
  yield takeLatest(SET_TECHNO, watchSetTechno);
  yield takeLatest(DELETE_TECHNO, watchDeleteTechno);
}