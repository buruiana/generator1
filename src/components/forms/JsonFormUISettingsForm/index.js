import JsonFormUISettingsForm from './jsonFormUISettingsForm';
import { connect } from "react-redux";
import {
  setProjectJsonForm,
  setProjectJsonFormUI,
} from '../../../services/projectSettingsService/actions';
import {
  setAllModals,
  setCurrentModal
} from '../../../services/modalService/actions';
import { setNodePath } from '../../../services/sortableTreeService/actions';

const mapStateToProps = state => {
  return {
    allModals: state.modalServiceReducer.allModals,
    currentModal: state.modalServiceReducer.currentModal,
    jsonForm: state.projectSettingsServiceReducer.jsonForm,
    nodePath: state.sortableTreeServiceReducer.nodePath,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setAllModals: content => dispatch(setAllModals(content)),
    setCurrentModal: currentModal => dispatch(setCurrentModal(currentModal)),
    setProjectJsonForm: jsonForm => dispatch(setProjectJsonForm(jsonForm)),
    setNodePath: nodePath => dispatch(setNodePath(nodePath)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(JsonFormUISettingsForm);