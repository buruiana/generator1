import SmartForm from './smartForm';
import { connect } from "react-redux";
import {
  setSmartSettings,
} from '../../../services/componentSettingsService/actions';

const mapStateToProps = state => {
  return {
    smart: state.componentSettingsServiceReducer.smart,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setSmartSettings: smart => dispatch(setSmartSettings(smart)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SmartForm);