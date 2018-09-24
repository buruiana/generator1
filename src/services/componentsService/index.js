import { call, put, takeLatest, select } from "redux-saga/effects";
import { GET_ALL_COMPONENTS } from './actionTypes';
import { setAllComponents } from './actions';
import { setDefaultTree } from '../sortableTreeService/actions';
import reduxSagaFirebase from '../../redux/firebaseConfig';
import { mock } from './__mocks__';

// export function* watchGetAllComponents() {
//   const snapshot = yield call(reduxSagaFirebase.firestore.getCollection, 'components');
//   const allComponents = snapshot.docs.map(component => component.data());

//   yield put(setAllComponents(allComponents));
//   yield put(setDefaultTree(allComponents));
// }

// export default function* rootSaga() {
//   yield takeLatest(GET_ALL_COMPONENTS, watchGetAllComponents);
// }




export function* watchGetAllComponents() {

  let allComponents = [];
  const configs = (yield select()).configsServiceReducer.configs;

  if (!configs.isOffline) {
    const snapshot = yield call(reduxSagaFirebase.firestore.getCollection, 'components');
    allComponents = snapshot.docs.map(component => component.data());
  } else {
    allComponents = mock.allComponents;
  };


  console.log('console: aaaaaaaaa', allComponents);

  yield put(setAllComponents(allComponents));
  yield put(setDefaultTree(allComponents));
}

export default function* rootSaga() {
  yield takeLatest(GET_ALL_COMPONENTS, watchGetAllComponents);
}