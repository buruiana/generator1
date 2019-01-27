import App from './app';
import { connect } from "react-redux";
import {
  initApp,
} from '../../../services/configsService/actions';
import {
  initProject,
} from '../../../services/projectSettingsService/actions';
import { setConfigsIsOffline } from '../../../services/configsService/actions';
import { setAppCode, setAppCodeDone } from '../../../services/appSettingsService/actions';

const mapStateToProps = state => {
  return {
    components: state.componentsServiceReducer.components,
    code: state.appSettingsServiceReducer.code,
    codeDone: state.appSettingsServiceReducer.codeDone,
  }
}

const mapDispatchToProps = {
  initApp: () => initApp(),
  initProject: () => initProject(),
  setConfigsIsOffline: isOffline => setConfigsIsOffline(isOffline),
  setAppCode: code => setAppCode(code),
  setAppCodeDone: val => setAppCodeDone(val),
}

export default connect(mapStateToProps, mapDispatchToProps)(App);