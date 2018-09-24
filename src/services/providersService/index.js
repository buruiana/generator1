import { call, put, takeLatest, select } from "redux-saga/effects";
import { GET_ALL_PROVIDERS } from './actionTypes';
import { setAllProviders } from './actions';
import reduxSagaFirebase from '../../redux/firebaseConfig';
import { mock } from './__mocks__';

export function* watchGetAllProviders() {
  let allProviders = [];
  const configs = (yield select()).configsServiceReducer.configs;

  if (configs.isOffline) {
    allProviders = mock.allProviders;
  } else {
    const snapshot = yield call(reduxSagaFirebase.firestore.getCollection, 'providers');
    allProviders = snapshot.docs.map(provider => provider.data());
  };
  console.log('console: allProviders', allProviders);
  yield put(setAllProviders(allProviders));
}

export default function* rootSaga() {
  yield takeLatest(GET_ALL_PROVIDERS, watchGetAllProviders);
}