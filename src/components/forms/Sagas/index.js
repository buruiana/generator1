import SagasForm from './sagasForm';
import { connect } from "react-redux";
import {
  setSagas,
} from '../../../services/sagasService/actions';
import {
  setModalVisibility,
} from '../../../services/modalService/actions';

const mapStateToProps = state => {
  return {
    sagas: state.sagasServiceReducer.sagas,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setSagas: sagas => dispatch(setSagas(sagas)),
    setModalVisibility: visibile => dispatch(setModalVisibility(visibile)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SagasForm);