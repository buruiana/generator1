import ActionTypesForm from './actionTypesForm';
import { connect } from "react-redux";
import { setActionTypes } from '../../../services/serviceSettingsService/actions';

const mapStateToProps = state => {
  return {
    actionTypes: state.serviceSettingsServiceReducer.actionTypes,
  }
}

const mapDispatchToProps = {
  setActionTypes: actionTypes => setActionTypes(actionTypes),
}

export default connect(mapStateToProps, mapDispatchToProps)(ActionTypesForm);