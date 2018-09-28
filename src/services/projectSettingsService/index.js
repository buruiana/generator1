// import { call, put, takeLatest, select } from "redux-saga/effects";
// import {
//   GET_ALL_PROVIDERS,
//   SET_PROVIDER,
//   DELETE_PROVIDER,
// } from './actionTypes';
// import {
//   setAllProviders,
//   getAllProviders,

// } from './actions';
// import reduxSagaFirebase from '../../redux/firebaseConfig';
// import { mock } from './__mocks__';
// import { boxArray } from '../../utils';

// export function* watchGetAllProviders() {
//   let allProviders = [];
//   const configs = (yield select()).configsServiceReducer.configs;

//   if (configs.isOffline) {
//     allProviders = mock.allProviders;
//   } else {
//     const snapshot = yield call(reduxSagaFirebase.firestore.getCollection, 'providers');
//     allProviders = snapshot.docs.map(provider => {
//       return { ...provider.data(), id: provider.id};
//     });
//   };
//   yield put(setAllProviders(boxArray(allProviders)));
// }

// export function* watchSetProvider() {
//   const provider = (yield select()).providersServiceReducer.provider;
//   const configs = (yield select()).configsServiceReducer.configs;

//   if (!configs.isOffline) {
//     if (provider.id) {
//       yield call(
//         reduxSagaFirebase.firestore.setDocument,
//         `providers/${provider.id}`,
//         provider
//       );
//     } else {
//       yield call(
//         reduxSagaFirebase.firestore.addDocument,
//         `providers`,
//         provider
//       );
//     }
//     yield put(getAllProviders());
//   }
// }

// export function* watchDeleteProvider() {
//   const { id } = (yield select()).providersServiceReducer.provider;
//   const configs = (yield select()).configsServiceReducer.configs;

//   if (!configs.isOffline) {
//     yield call(reduxSagaFirebase.firestore.deleteDocument, `providers/${id}`);
//     yield put(getAllProviders());
//   }
// }

// export default function* rootSaga() {
//   yield takeLatest(GET_ALL_PROVIDERS, watchGetAllProviders);
//   yield takeLatest(SET_PROVIDER, watchSetProvider);
//   yield takeLatest(DELETE_PROVIDER, watchDeleteProvider);
// }