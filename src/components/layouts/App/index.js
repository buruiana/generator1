import App from './app';
import { connect } from "react-redux";
import {
  initApp,
} from '../../../services/configsService/actions';
import { setConfigsIsOffline } from '../../../services/configsService/actions';

const mapStateToProps = state => {
  return {
    components: state.componentsServiceReducer.components,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    initApp: () => dispatch(initApp()),
    setConfigsIsOffline: isOffline => dispatch(setConfigsIsOffline(isOffline))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);