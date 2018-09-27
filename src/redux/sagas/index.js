import { fork } from "redux-saga/effects";
import componentsSaga from '../../services/componentsService';
import providersSaga from '../../services/providersService';
import technosSaga from '../../services/technosService';
import projectTypesSaga from '../../services/projectTypesService';

export default function* sagas() {
  yield [
    componentsSaga,
    providersSaga,
    technosSaga,
    projectTypesSaga,
  ].map(saga => fork(saga));
}
