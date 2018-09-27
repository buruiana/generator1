import ProjectSettingsForm from './projectSettingsForm';
import { connect } from "react-redux";
import {
  setProjectName,
  setProjectType,
  setProjectTechno,
} from '../../../services/projectSettingsService/actions';
import {
  setModalContent,
  setModalVisibility
} from '../../../services/modalService/actions';

const mapStateToProps = state => {
  return {
    modalContent: state.modalServiceReducer.modalContent,
    modalVisible: state.modalServiceReducer.modalVisible,
    projectName: state.projectSettingsServiceReducer.projectName,
    projectType: state.projectSettingsServiceReducer.projectType,
    projectTechno: state.projectSettingsServiceReducer.projectTechno,
    technos: state.technosServiceReducer.technos,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setModalContent: content => dispatch(setModalContent(content)),
    setModalVisibility: modalVisible => dispatch(setModalVisibility(modalVisible)),
    setProjectName: projectName => dispatch(setProjectName(projectName)),
    setProjectTechno: projectTechno => dispatch(setProjectTechno(projectTechno)),
    setProjectType: projectType => dispatch(setProjectType(projectType)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectSettingsForm);