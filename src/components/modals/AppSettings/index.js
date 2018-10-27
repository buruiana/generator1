import AppSettings from './appSettings';
import { connect } from "react-redux";
import {
  setModalContent,
  setModalVisibility,
} from '../../../services/modalService/actions';


const mapStateToProps = state => {
  return {
    modalContent: state.modalServiceReducer.modalContent,
    modalVisible: state.modalServiceReducer.modalVisible,
    projectName: state.projectSettingsServiceReducer.name,
    projectType: state.projectSettingsServiceReducer.type,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setModalContent: content => dispatch(setModalContent(content)),
    setModalVisibility: modalVisible => dispatch(setModalVisibility(modalVisible)),
    setProjectName: name => dispatch(setProjectName(name)),
    setProjectType: projectType => dispatch(setProjectType(projectType)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppSettings);