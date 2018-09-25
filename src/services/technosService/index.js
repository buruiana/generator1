import { call, put, takeLatest, select } from "redux-saga/effects";
import { GET_ALL_TECHNOS } from './actionTypes';
import { setAllTechnos } from './actions';
import reduxSagaFirebase from '../../redux/firebaseConfig';
import { mock } from './__mocks__';

export function* watchGetAllTechnos() {
  let allTechnos = [];
  const configs = (yield select()).configsServiceReducer.configs;

  if (configs.isOffline) {
    allTechnos = mock.allTechnos;
  } else {
    const snapshot = yield call(reduxSagaFirebase.firestore.getCollection, 'technos');
    allTechnos = snapshot.docs.map(techno => techno.data());
  };
  yield put(setAllTechnos(allTechnos));
}

export default function* rootSaga() {
  yield takeLatest(GET_ALL_TECHNOS, watchGetAllTechnos);
}