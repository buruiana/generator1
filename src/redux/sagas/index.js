import { fork } from "redux-saga/effects";
import componentsSaga from '../../services/componentsService';
import providersSaga from '../../services/providersService';
import propTypesSaga from '../../services/propTypesService';

export default function* sagas() {
  yield [
    componentsSaga,
    providersSaga,
    propTypesSaga,
  ].map(saga => fork(saga));
}
