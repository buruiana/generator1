import ProjectSettingsForm from './projectSettingsForm';
import { connect } from "react-redux";
import {
  setProjectName,
  setProjectType,
  setProjectTechno,
  setProjectComponentType,
} from '../../../services/projectSettingsService/actions';

const mapStateToProps = state => {
  return {
    projectName: state.projectSettingsServiceReducer.projectName,
    projectType: state.projectSettingsServiceReducer.projectType,
    projectTechno: state.projectSettingsServiceReducer.projectTechno,
    componentType: state.projectSettingsServiceReducer.componentType,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setProjectName: projectName => dispatch(setProjectName(projectName)),
    setProjectTechno: projectTechno => dispatch(setProjectTechno(projectTechno)),
    setProjectType: projectType => dispatch(setProjectType(projectType)),
    setProjectComponentType: componentType => dispatch(setProjectComponentType(componentType)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectSettingsForm);