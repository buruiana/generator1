import { fork } from "redux-saga/effects";
import componentsSaga from '../../services/componentsService';
import providersSaga from '../../services/providersService';
import propTypesSaga from '../../services/propTypesService';
import serviceSettingsSaga from '../../services/serviceSettingsService';
import codeGeneratorSaga from '../../services/codeGeneratorService';
import aceTabsSaga from '../../services/aceTabsService';
import componentSettingsSaga from '../../services/componentSettingsService';
import appSettingsSaga from '../../services/appSettingsService';
import projectSettingsSaga from '../../services/projectSettingsService';

export default function* sagas() {
  yield [
    providersSaga,
    propTypesSaga,
    serviceSettingsSaga,
    codeGeneratorSaga,
    aceTabsSaga,
    componentSettingsSaga,
    componentsSaga,
    appSettingsSaga,
    projectSettingsSaga,
  ].map(saga => fork(saga));
}
