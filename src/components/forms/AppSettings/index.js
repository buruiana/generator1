import AppSettingsForm from './appSettingsForm';
import { connect } from "react-redux";
import {
  setAppSettings,
} from '../../../services/appSettingsService/actions';

const mapStateToProps = state => {
  return {
    appSettings: state.appSettingsServiceReducer.settings,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setAppSettings: settings => dispatch(setAppSettings(settings)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppSettingsForm);