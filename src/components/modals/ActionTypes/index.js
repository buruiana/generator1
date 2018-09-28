import ActionTypes from './actionTypes';
import { connect } from "react-redux";
import {
  setModalContent,
  setModalVisibility,
} from '../../../services/modalService/actions';


const mapStateToProps = state => {
  return {
    modalContent: state.modalServiceReducer.modalContent,
    modalVisible: state.modalServiceReducer.modalVisible,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setModalContent: content => dispatch(setModalContent(content)),
    setModalVisibility: modalVisible => dispatch(setModalVisibility(modalVisible)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ActionTypes);