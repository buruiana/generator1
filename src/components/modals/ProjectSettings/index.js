import ProjectSettings from './projectSettings';
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    currentModal: state.modalServiceReducer.currentModal,
    allModals: state.modalServiceReducer.allModals,
    projectName: state.projectSettingsServiceReducer.name,
    projectType: state.projectSettingsServiceReducer.type,
  }
}

export default connect(mapStateToProps)(ProjectSettings);