import { call, put, takeLatest, fork } from "redux-saga/effects";
import { GET_ALL_PROVIDERS } from './actionTypes';
import { setAllProviders } from './actions';
import reduxSagaFirebase from '../../redux/firebaseConfig';

export function* watchGetAllProviders() {
  const snapshot = yield call(reduxSagaFirebase.firestore.getCollection, 'providers');
  const allProviders = snapshot.docs.map(provider => provider.data());

  yield put(setAllProviders(allProviders));
}

export default function* rootSaga() {
  yield takeLatest(GET_ALL_PROVIDERS, watchGetAllProviders);
}