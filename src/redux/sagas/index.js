import { fork } from "redux-saga/effects";
import componentsSaga from '../../services/componentsService';
import providersSaga from '../../services/providersService';
import technosSaga from '../../services/technosService';

export default function* sagas() {
  yield [
    componentsSaga,
    providersSaga,
    technosSaga,
  ].map(saga => fork(saga));
}
