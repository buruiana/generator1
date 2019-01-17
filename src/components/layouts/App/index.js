import App from './app';
import { connect } from "react-redux";
import {
  initApp,
} from '../../../services/configsService/actions';
import { setConfigsIsOffline } from '../../../services/configsService/actions';
import { setAppCode, setAppCodeDone } from '../../../services/appSettingsService/actions';

const mapStateToProps = state => {
  console.log('console: state', state);
  return {
    components: state.componentsServiceReducer.components,
    code: state.appSettingsServiceReducer.code,
    codeDone: state.appSettingsServiceReducer.codeDone,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    initApp: () => dispatch(initApp()),
    setConfigsIsOffline: isOffline => dispatch(setConfigsIsOffline(isOffline)),
    setAppCode: code => dispatch(setAppCode(code)),
    setAppCodeDone: val => dispatch(setAppCodeDone(val)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);