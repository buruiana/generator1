import JsonFormUISettingsForm from './jsonFormUISettingsForm';
import { connect } from "react-redux";
import { setProjectJsonForm } from '../../../services/projectSettingsService/actions';
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

const mapDispatchToProps = {
  setAllModals: content => setAllModals(content),
  setCurrentModal: currentModal => setCurrentModal(currentModal),
  setProjectJsonForm: jsonForm => setProjectJsonForm(jsonForm),
  setNodePath: nodePath => setNodePath(nodePath),
}

export default connect(mapStateToProps, mapDispatchToProps)(JsonFormUISettingsForm);