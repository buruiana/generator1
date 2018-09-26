import { call, put, takeLatest, select } from "redux-saga/effects";
import { GET_ALL_PROVIDERS } from './actionTypes';
import { setAllProviders } from './actions';
import reduxSagaFirebase from '../../redux/firebaseConfig';
import { mock } from './__mocks__';
import { boxArray } from '../../utils';

export function* watchGetAllProviders() {
  let allProviders = [];
  const configs = (yield select()).configsServiceReducer.configs;

  if (configs.isOffline) {
    allProviders = mock.allProviders;
  } else {
    const snapshot = yield call(reduxSagaFirebase.firestore.getCollection, 'providers');
    console.log('console: allProviders', snapshot);
    allProviders = snapshot.docs.map(provider => provider.data());
  };

  yield put(setAllProviders(boxArray(allProviders)));
}

export default function* rootSaga() {
  yield takeLatest(GET_ALL_PROVIDERS, watchGetAllProviders);
}