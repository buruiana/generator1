import NavBarSettings from './navBarSettings';
import { connect } from "react-redux";
import {
  setCurrentModal,
  setAllModals,
} from '../../../services/modalService/actions';
import { initProject } from '../../../services/projectSettingsService/actions';

const mapStateToProps = state => {
  return {
    projectName: state.projectSettingsServiceReducer.projectName,
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

const mapDispatchToProps = {
  setAllModals: allModals => setAllModals(allModals),
  setCurrentModal: currentModal => setCurrentModal(currentModal),
  initProject: () => initProject(),
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBarSettings);