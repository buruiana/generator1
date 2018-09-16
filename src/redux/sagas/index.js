import { fork } from "redux-saga/effects";
import componentsSaga from '../../services/componentsService';

export default function* sagas() {
  yield [
    componentsSaga,
  ].map(saga => fork(saga));
}
