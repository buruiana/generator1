import NavBarSettings from './navBarSettings';
import { connect } from "react-redux";
import {
  setModalVisibility,
  setModalContent,
} from '../../../services/modalService/actions';

const mapStateToProps = state => {
  return {
    projectType: state.projectSettingsServiceReducer.projectType,
    projectTechno: state.projectSettingsServiceReducer.projectTechno,
    componentType: state.projectSettingsServiceReducer.componentType,
    actionTypes: state.actionTypesServiceReducer.actionTypes,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setModalVisibility: modalVisible => dispatch(setModalVisibility(modalVisible)),
    setModalContent: content => dispatch(setModalContent(content)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBarSettings);