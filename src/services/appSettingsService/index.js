// import { put, takeLatest, select } from "redux-saga/effects";
// import camelCase from 'lodash/camelCase';
// import {
//   SET_ACTION_TYPES
// } from '../serviceSettingsService/actionTypes';
// import {
//   setActions,
//   setReducer,
//   setSaga,
// } from './actions';

// export function* watchSetActionTypes() {

//   let actions = [];
//   const actionTypes = (yield select()).serviceSettingsServiceReducer.actionTypes;

//   actionTypes.map(actionType => {

//     let object = {
//       isActive: false,
//       name: `${camelCase(actionType.name)}`,
//       actionType: actionType.name.toUpperCase(),
//       payload: [],
//     };
//     actions.push(object);

//     if (actionType.isSuccess) {
//       object = {
//         isActive: false,
//         name: `${camelCase(actionType.name)}Success`,
//         actionType: `${actionType.name.toUpperCase()}_SUCCESS`,
//         payload: [],
//       }
//       actions.push(object);
//     }

//     if (actionType.isFail) {
//       object = {
//         isActive: false,
//         name: `${camelCase(actionType.name)}Fail`,
//         actionType: `${actionType.name.toUpperCase()}_FAIL`,
//         payload: [],
//       }
//       actions.push(object);
//     }
//   });
//   yield put(setActions(actions));
// }

// export function* watchSetActionTypesForReducer() {

//   let reducer = [];
//   const actionTypes = (yield select()).serviceSettingsServiceReducer.actionTypes;

//   actionTypes.map(actionType => {
//     reducer.push({
//       isActive: false,
//       name: actionType.name.toUpperCase(),
//       payloadInfo: []
//     });

//     if (actionType.isSuccess) {
//       reducer.push({
//         isActive: false,
//         name: `${actionType.name.toUpperCase()}_SUCCESS`,
//         payloadInfo: []
//       });
//     }

//     if (actionType.isFail) {
//       reducer.push({
//         isActive: false,
//         name: `${actionType.name.toUpperCase()}_FAIL`,
//         payloadInfo: []
//       });
//     }
//   });

//   yield put(setReducer(reducer));
// }

// export function* watchSetActionTypesForSaga() {

//   let saga = [];
//   const actionTypes = (yield select()).serviceSettingsServiceReducer.actionTypes;

//   actionTypes.map(actionType => {
//     saga.push({
//       isActive: false,
//       name: actionType.name.toUpperCase(),
//       watcher: '',
//     });

//     if (actionType.isSuccess) {
//       saga.push({
//         isActive: false,
//         name: `${actionType.name.toUpperCase()}_SUCCESS`,
//         watcher: '',
//       });
//     }

//     if (actionType.isFail) {
//       saga.push({
//         isActive: false,
//         name: `${actionType.name.toUpperCase()}_FAIL`,
//         watcher: ''
//       });
//     }
//   });
//   yield put(setSaga(saga));
// }

// export default function* rootSaga() {
//   yield takeLatest(SET_ACTION_TYPES, watchSetActionTypes);
//   yield takeLatest(SET_ACTION_TYPES, watchSetActionTypesForReducer);
//   yield takeLatest(SET_ACTION_TYPES, watchSetActionTypesForSaga);
// }
