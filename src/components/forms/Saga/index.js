import SagaForm from './sagaForm';
import { connect } from "react-redux";
import { setSaga } from '../../../services/serviceSettingsService/actions';

const mapStateToProps = state => {
  return {
    saga: state.serviceSettingsServiceReducer.saga,
  }
}

const mapDispatchToProps = {
  setSaga: saga => setSaga(saga),
}

export default connect(mapStateToProps, mapDispatchToProps)(SagaForm);