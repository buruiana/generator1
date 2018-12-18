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
    projectTechno: state.projectSettingsServiceReducer.projectTechno,
    componentType: state.projectSettingsServiceReducer.componentType,
    actionTypes: state.serviceSettingsServiceReducer.actionTypes,
    allModals: state.modalServiceReducer.allModals,
    currentModal: state.modalServiceReducer.currentModal,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setAllModals: allModals => dispatch(setAllModals(allModals)),
    setCurrentModal: currentModal => dispatch(setCurrentModal(currentModal)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBarSettings);