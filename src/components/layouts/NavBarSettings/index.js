import NavBarSettings from './navBarSettings';
import { connect } from "react-redux";
import {
  setCurrentModal,
  setAllModals,
} from '../../../services/modalService/actions';

const mapStateToProps = state => {
  return {
    projectType: state.projectSettingsServiceReducer.projectType,
    hasJsonForm: state.projectSettingsServiceReducer.hasJsonForm,
    jsonForm: state.projectSettingsServiceReducer.jsonForm,
    projectTechno: state.projectSettingsServiceReducer.projectTechno,
    componentType: state.projectSettingsServiceReducer.componentType,
    actionTypes: state.serviceSettingsServiceReducer.actionTypes,
    allModals: state.modalServiceReducer.allModals,
    currentModal: state.modalServiceReducer.currentModal,
    appSettings: state.appSettingsServiceReducer.settings,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setAllModals: allModals => dispatch(setAllModals(allModals)),
    setCurrentModal: currentModal => dispatch(setCurrentModal(currentModal)),
    setAppCode: code => dispatch(setAppCode(code)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBarSettings);