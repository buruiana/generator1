import AppSettingsForm from './appSettingsForm';
import { connect } from "react-redux";
import {
  setAppSettings,
  setGenerateApp,
} from '../../../services/appSettingsService/actions';

const mapStateToProps = state => {
  return {
    appSettings: state.appSettingsServiceReducer.settings,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setAppSettings: settings => dispatch(setAppSettings(settings)),
    setGenerateApp: val => dispatch(setGenerateApp(val)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppSettingsForm);