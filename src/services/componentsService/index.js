import { call, put, takeLatest, select } from "redux-saga/effects";
import isEmpty from 'lodash/isEmpty';
import sortBy from 'lodash/sortBy';
import {
  INIT_APP
} from '../configsService/actionTypes';
import {
  SET_COMPONENT,
  DELETE_COMPONENT,
  GET_ALL_COMPONENTS,
} from './actionTypes';
import {
  setAllComponents,
  getAllComponents,

} from './actions';
import { setDefaultTree } from '../sortableTreeService/actions';
import reduxSagaFirebase from '../../redux/firebaseConfig';
import { mock } from './__mocks__';
import { initApp } from "../configsService/actions";

export function* watchGetAllComponents() {
  let allComponents = [];
  const { isOffline } = (yield select()).configsServiceReducer;

  if (isOffline) {
    allComponents = mock.allComponents;
  } else {
    const snapshot = yield call(reduxSagaFirebase.firestore.getCollection, 'components');
    allComponents = snapshot.docs.map(component => {
      return { ...component.data(), id: component.id };
    });
  };
  console.log('console: allComponents ', allComponents);
  if (isEmpty(allComponents)) allComponents = [];

  sortBy(allComponents, el => el.title);

  yield put(setAllComponents(allComponents));
  yield put(setDefaultTree(allComponents));

}

export function* watchSetComponent(action) {
  const { component } = action;
  const { isOffline } = (yield select()).configsServiceReducer;
  let newComponent = { ...component };
  newComponent.children = [];

  if (!isOffline) {
    if (component.id) {
      yield call(
        reduxSagaFirebase.firestore.setDocument,
        `components/${component.id}`,
        newComponent
      );
    } else {
      yield call(
        reduxSagaFirebase.firestore.addDocument,
        `components`,
        newComponent
      );
    }
    yield put(getAllComponents());
  }
}

export function* watchDeleteComponent(action) {
  const { id } = action.component;
  const { isOffline } = (yield select()).configsServiceReducer;

  if (!isOffline) {
    yield call(reduxSagaFirebase.firestore.deleteDocument, `components/${id}`);
    yield put(initApp());
  }
}

export default function* rootSaga() {
  yield takeLatest([INIT_APP, GET_ALL_COMPONENTS], watchGetAllComponents);
  yield takeLatest(SET_COMPONENT, watchSetComponent);
  yield takeLatest(DELETE_COMPONENT, watchDeleteComponent);
}