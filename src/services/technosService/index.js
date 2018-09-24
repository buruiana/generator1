import { call, put, takeLatest, fork } from "redux-saga/effects";
import { GET_ALL_TECHNOS } from './actionTypes';
import { setAllTechnos } from './actions';
import reduxSagaFirebase from '../../redux/firebaseConfig';

export function* watchGetAllTechnos() {
  const snapshot = yield call(reduxSagaFirebase.firestore.getCollection, 'providers');
  const allTechnos = snapshot.docs.map(techno => techno.data());

  yield put(setAllTechnos(allTechnos));
}

export default function* rootSaga() {
  yield takeLatest(GET_ALL_TECHNOS, watchGetAllTechnos);
}