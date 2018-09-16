// import { call, put, takeLatest, fork } from "redux-saga/effects";
// import { GET_ALL_COMPONENTS } from './actionTypes';
// import { setAllComponents } from './actions';
// import reduxSagaFirebase from '../../redux/firebaseConfig';

// export function* watchGetAllComponents() {
//   const snapshot = yield call(reduxSagaFirebase.firestore.getCollection, 'components');

//   const allComponents = snapshot.map(component => component.data());
//   console.log('console: allComponents', allComponents );
//   yield put(setAllComponents(allComponents));

// }

// export default function* rootSaga() {
//   yield takeLatest(GET_ALL_COMPONENTS, watchGetAllComponents);
// }