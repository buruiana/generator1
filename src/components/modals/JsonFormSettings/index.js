import JsonFormSettings from './jsonFormSettings';
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    jsonForm: state.projectSettingsServiceReducer.jsonForm,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setProjectJsonForm: jsonForm => dispatch(setProjectJsonForm(jsonForm)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(JsonFormSettings);