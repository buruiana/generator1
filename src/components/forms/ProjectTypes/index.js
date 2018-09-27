import ProjectTypesForm from './projectTypesForm';
import { connect } from "react-redux";
import {
  setProjectType,
  setSelectedProjectType
} from '../../../services/projectTypesService/actions';

const mapDispatchToProps = dispatch => {
  return {
    setProjectType: () => dispatch(setProjectType()),
    setSelectedProjectType: projectType => dispatch(setSelectedProjectType(projectType)),
  };
}

export default connect(null, mapDispatchToProps)(ProjectTypesForm);