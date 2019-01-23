import { fork } from "redux-saga/effects";
import { all } from 'redux-saga/effects';
import counterSaga from '../../services/counterService';

export default function* sagas() {
  yield [
    counterSaga,
  ].map(saga => fork(saga));
}
