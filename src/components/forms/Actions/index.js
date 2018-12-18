import ActionsForm from './actionsForm';
import { connect } from "react-redux";
import {
  setActions,
} from '../../../services/serviceSettingsService/actions';

const mapStateToProps = state => {
  return {
    actions: state.serviceSettingsServiceReducer.actions,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setActions: actions => dispatch(setActions(actions)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ActionsForm);