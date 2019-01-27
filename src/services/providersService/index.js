import { call, put, takeLatest, select } from "redux-saga/effects";
import {
  INIT_APP
} from '../configsService/actionTypes';
import {
  SET_PROVIDER,
  DELETE_PROVIDER,
} from './actionTypes';
import {
  setAllProviders,
} from './actions';
import { initApp } from '../configsService/actions';
import { initProject } from '../projectSettingsService/actions';
import reduxSagaFirebase from '../../redux/firebaseConfig';
import { boxArray } from '../../utils';
import { mock } from './__mocks__';

export function* watchGetAllProviders() {
  let allProviders = [];
  const { isOffline } = (yield select()).configsServiceReducer;

  if (isOffline) {
    allProviders = mock.allProviders;
  } else {
    const snapshot = yield call(reduxSagaFirebase.firestore.getCollection, 'providers');
    allProviders = snapshot.docs.map(provider => {
      return { ...provider.data(), id: provider.id};
    });
  };
  yield put(setAllProviders(boxArray(allProviders)));
}

export function* watchSetProvider(action) {
  const { provider } = action;
  const { isOffline } = (yield select()).configsServiceReducer;

  if (!isOffline) {
    if (provider.id) {
      yield call(
        reduxSagaFirebase.firestore.setDocument,
        `providers/${provider.id}`,
        provider
      );
    } else {
      yield call(
        reduxSagaFirebase.firestore.addDocument,
        `providers`,
        provider
      );
    }
    yield put(initApp());
    yield put(initProject());
  }
}

export function* watchDeleteProvider(action) {
  const { id } = action.provider;
  const { isOffline } = (yield select()).configsServiceReducer;

  if (!isOffline) {
    yield call(reduxSagaFirebase.firestore.deleteDocument, `providers/${id}`);
    yield put(initApp());
    yield put(initProject());
  }
}

export default function* rootSaga() {
  yield takeLatest(INIT_APP, watchGetAllProviders);
  yield takeLatest(SET_PROVIDER, watchSetProvider);
  yield takeLatest(DELETE_PROVIDER, watchDeleteProvider);
}