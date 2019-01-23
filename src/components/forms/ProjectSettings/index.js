import ProjectSettingsForm from './projectSettingsForm';
import { connect } from "react-redux";
import {
  setProjectName,
  setProjectType,
  setProjectTechno,
  setProjectComponentType,
  setProjectDestination,
} from '../../../services/projectSettingsService/actions';

const mapStateToProps = state => {
  return {
    projectName: state.projectSettingsServiceReducer.projectName,
    projectType: state.projectSettingsServiceReducer.projectType,
    projectTechno: state.projectSettingsServiceReducer.projectTechno,
    projectDestination: state.projectSettingsServiceReducer.projectDestination,
    componentType: state.projectSettingsServiceReducer.componentType,
  }
}

const mapDispatchToProps = {
  setProjectName: projectName => setProjectName(projectName),
  setProjectTechno: projectTechno => setProjectTechno(projectTechno),
  setProjectType: projectType => setProjectType(projectType),
  setProjectComponentType: componentType => setProjectComponentType(componentType),
  setProjectDestination: projectDestination => setProjectDestination(projectDestination),
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectSettingsForm);