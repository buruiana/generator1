import AppSettingsForm from './appSettingsForm';
import { connect } from "react-redux";
import {
  setAppSettings,
} from '../../../services/appSettingsService/actions';
import {
  setModalContent,
  setModalVisibility,
} from '../../../services/modalService/actions';

const mapStateToProps = state => {
  return {
    modalContent: state.modalServiceReducer.modalContent,
    modalVisible: state.modalServiceReducer.modalVisible,
    appSettings: state.appSettingsServiceReducer.settings,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setModalContent: content => dispatch(setModalContent(content)),
    setModalVisibility: modalVisible => dispatch(setModalVisibility(modalVisible)),
    setAppSettings: settings => dispatch(setAppSettings(settings)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppSettingsForm);