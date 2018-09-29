import ActionTypesForm from './actionTypesForm';
import { connect } from "react-redux";
import {
  setActionTypes,
} from '../../../services/actionTypesService/actions';
import {
  setModalVisibility,
} from '../../../services/modalService/actions';

const mapStateToProps = state => {
  return {
    actionTypes: state.actionTypesServiceReducer.actionTypes,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setActionTypes: actionTypes => dispatch(setActionTypes(actionTypes)),
    setModalVisibility: visibile => dispatch(setModalVisibility(visibile)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ActionTypesForm);