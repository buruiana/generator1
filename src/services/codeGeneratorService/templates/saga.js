export const example = `
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
  getAllProviders,

} from './actions';
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


export default function* rootSaga() {
{{#saga}}
{{#isActive}}
  yield takeLatest({{name}}, {{watcher}});
{{/isActive}}
{{/saga}}
}
`;