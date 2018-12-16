import JsonFormSettings from './jsonFormSettings';
import { connect } from "react-redux";
import {
  setModalContent,
  setModalVisibility,
} from '../../../services/modalService/actions';


const mapStateToProps = state => {
  return {
    modalContent: state.modalServiceReducer.modalContent,
    modalVisible: state.modalServiceReducer.modalVisible,
    jsonForm: state.projectSettingsServiceReducer.jsonForm,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setModalContent: content => dispatch(setModalContent(content)),
    setModalVisibility: modalVisible => dispatch(setModalVisibility(modalVisible)),
    setProjectJsonForm: jsonForm => dispatch(setProjectJsonForm(jsonForm)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(JsonFormSettings);