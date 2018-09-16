// import { call, put, takeLatest, fork } from "redux-saga/effects";
// import { GET_ALL_COMPONENTS } from './actionTypes';
// import { setAllComponents } from './actions';
// import reduxSagaFirebase from '../../redux/firebaseConfig';
// import { setTest } from '../componentsService/actions';

// export function* watchGetAllComponents() {
//   const snapshot = yield call(reduxSagaFirebase.firestore.getCollection, 'components');

//   let allComponents = [];

//   snapshot.forEach(component => {
//     allComponents.push(component.data());
//   });
//   // yield put(setAllComponents(allComponents));

// }

// export default function* rootSaga() {
//   yield takeLatest(GET_ALL_COMPONENTS, watchGetAllComponents);
// }