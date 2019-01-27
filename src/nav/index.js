import { connect } from "react-redux";
import NavBar from './navBar';
import { setConfigsIsOffline, initApp } from '../services/configsService/actions';
import { initProject } from '../services/projectSettingsService/actions';

const mapStateToProps = state => {
  return {
    isOffline: state.configsServiceReducer.isOffline,
  }
}

const mapDispatchToProps = {
  setConfigsIsOffline: isOffline => setConfigsIsOffline(isOffline),
  initApp: () => initApp(),
  initProject: () => initProject(),
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);