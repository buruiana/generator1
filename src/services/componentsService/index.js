import { call, put, takeLatest, select } from "redux-saga/effects";
import {
  GET_ALL_COMPONENTS,
  SET_COMPONENT,
  DELETE_COMPONENT,
} from './actionTypes';
import {
  setAllComponents,
  getAllComponents,

} from './actions';
import { setDefaultTree } from '../sortableTreeService/actions';
import reduxSagaFirebase from '../../redux/firebaseConfig';
import { mock } from './__mocks__';

export function* watchGetAllComponents() {
  let allComponents = [];
  const configs = (yield select()).configsServiceReducer.configs;

  if (configs.isOffline) {
    allComponents = mock.allComponents;
  } else {
    const snapshot = yield call(reduxSagaFirebase.firestore.getCollection, 'components');
    allComponents = snapshot.docs.map(component => {
      return { ...component.data(), id: component.id };
    });
  };

  yield put(setAllComponents(allComponents));
  yield put(setDefaultTree(allComponents));

}

export function* watchSetComponent() {
  const component = (yield select()).componentsServiceReducer.component;
  const configs = (yield select()).configsServiceReducer.configs;

  if (!configs.isOffline) {
    if (component.id) {
      yield call(
        reduxSagaFirebase.firestore.setDocument,
        `components/${component.id}`,
        component
      );
    } else {
      yield call(
        reduxSagaFirebase.firestore.addDocument,
        `components`,
        component
      );
    }
    yield put(getAllComponents());
  }
}

export function* watchDeleteComponent() {
  const { id } = (yield select()).componentsServiceReducer.component;
  const configs = (yield select()).configsServiceReducer.configs;

  if (!configs.isOffline) {
    yield call(reduxSagaFirebase.firestore.deleteDocument, `components/${id}`);
    yield put(getAllComponents());
  }
}

export default function* rootSaga() {
  yield takeLatest(GET_ALL_COMPONENTS, watchGetAllComponents);
  yield takeLatest(SET_COMPONENT, watchSetComponent);
  yield takeLatest(DELETE_COMPONENT, watchDeleteComponent);
}