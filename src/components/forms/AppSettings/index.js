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

const mapDispatchToProps = {
  setAppSettings: settings => setAppSettings(settings),
  setGenerateApp: val => setGenerateApp(val),
}

export default connect(mapStateToProps, mapDispatchToProps)(AppSettingsForm);