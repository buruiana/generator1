import { fork } from "redux-saga/effects";
import componentsSaga from '../../services/componentsService';
import providersSaga from '../../services/providersService';
import propTypesSaga from '../../services/propTypesService';
import actionsSaga from '../../services/actionsService';
import sagaSaga from '../../services/sagaService';
import reducerSaga from '../../services/reducerService';

export default function* sagas() {
  yield [
    componentsSaga,
    providersSaga,
    propTypesSaga,
    actionsSaga,
    sagaSaga,
    reducerSaga,
  ].map(saga => fork(saga));
}
