import { call, put, takeLatest, select } from "redux-saga/effects";
import { GET_ALL_COMPONENTS } from './actionTypes';
import { setAllComponents } from './actions';
import { setDefaultTree } from '../sortableTreeService/actions';
import reduxSagaFirebase from '../../redux/firebaseConfig';
import { mock } from './__mocks__';

export function* watchGetAllComponents() {

  let allComponents = [];
  const configs = (yield select()).configsServiceReducer.configs;
  console.log('console: 00000000000000000000', configs.isOffline);
  if (configs.isOffline) {
    console.log('console: 111111111111111111', );
    allComponents = mock.allComponents;
  } else {
    console.log('console: 222222222222222', );
    const snapshot = yield call(reduxSagaFirebase.firestore.getCollection, 'components');
    allComponents = snapshot.docs.map(component => component.data());
  };


  console.log('console: aaaaaaaaa', allComponents);

  yield put(setAllComponents(allComponents));
  yield put(setDefaultTree(allComponents));
}

export default function* rootSaga() {
  yield takeLatest(GET_ALL_COMPONENTS, watchGetAllComponents);
}