import { connect } from "react-redux";
import NavBar from './navBar';
import { setConfigsIsOffline, initApp } from '../services/configsService/actions';

const mapStateToProps = state => {
  return {
    isOffline: state.configsServiceReducer.isOffline,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setConfigsIsOffline: isOffline => dispatch(setConfigsIsOffline(isOffline)),
    initApp: () => dispatch(initApp()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);