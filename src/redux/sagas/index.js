import { fork } from "redux-saga/effects";
import componentsSaga from '../../services/componentsService';
import providersSaga from '../../services/providersService';
import propTypesSaga from '../../services/propTypesService';
import actionsSaga from '../../services/actionsService';
import sagasSaga from '../../services/sagasService';

export default function* sagas() {
  yield [
    componentsSaga,
    providersSaga,
    propTypesSaga,
    actionsSaga,
    sagasSaga,
  ].map(saga => fork(saga));
}
