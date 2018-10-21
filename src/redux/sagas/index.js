import { fork } from "redux-saga/effects";
import componentsSaga from '../../services/componentsService';
import providersSaga from '../../services/providersService';
import propTypesSaga from '../../services/propTypesService';
import serviceSettingsSaga from '../../services/serviceSettingsService';
import codeGeneratorSaga from '../../services/codeGeneratorService';
import aceTabsSaga from '../../services/aceTabsService';
import componentSettingsSaga from '../../services/componentSettingsService';

export default function* sagas() {
  yield [
    componentsSaga,
    providersSaga,
    propTypesSaga,
    serviceSettingsSaga,
    codeGeneratorSaga,
    aceTabsSaga,
    componentSettingsSaga,
  ].map(saga => fork(saga));
}
