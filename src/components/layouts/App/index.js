import App from './app';
import { connect } from "react-redux";
import {
  initApp,
} from '../../../services/configsService/actions';
import { setConfigsIsOffline } from '../../../services/configsService/actions';
import { setAppCode, setAppCodeDone } from '../../../services/appSettingsService/actions';

const mapStateToProps = state => {
  return {
    components: state.componentsServiceReducer.components,
    code: state.appSettingsServiceReducer.code,
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