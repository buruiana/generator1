import SagaForm from './sagaForm';
import { connect } from "react-redux";
import {
  setSaga,
} from '../../../services/serviceSettingsService/actions';
import {
  setModalVisibility,
} from '../../../services/modalService/actions';

const mapStateToProps = state => {
  return {
    saga: state.serviceSettingsServiceReducer.saga,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setSaga: saga => dispatch(setSaga(saga)),
    setModalVisibility: visibile => dispatch(setModalVisibility(visibile)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SagaForm);