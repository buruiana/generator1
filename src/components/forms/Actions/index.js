import ActionsForm from './actionsForm';
import { connect } from "react-redux";
import {
  setActions,
} from '../../../services/actionsService/actions';
import {
  setModalVisibility,
} from '../../../services/modalService/actions';

const mapStateToProps = state => {
  return {
    actions: state.actionsServiceReducer.actions,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setActions: actions => dispatch(setActions(actions)),
    setModalVisibility: visibile => dispatch(setModalVisibility(visibile)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ActionsForm);