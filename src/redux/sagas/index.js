import { fork } from "redux-saga/effects";
import componentsSaga from '../../services/componentsService';
import providersSaga from '../../services/providersService';

export default function* sagas() {
  yield [
    componentsSaga,
    providersSaga,
  ].map(saga => fork(saga));
}
