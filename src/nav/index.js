import { connect } from "react-redux";
import NavBar from './navBar';
import { setConfigsIsOffline } from '../services/configsService/actions';

const mapStateToProps = state => {
  return {
    isOffline: state.configsServiceReducer.configs.isOffline,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setConfigsIsOffline: isOffline => dispatch(setConfigsIsOffline(isOffline)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);