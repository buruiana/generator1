import JsonFormInfo from './jsonFormInfo';
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    jsonForm: state.projectSettingsServiceReducer.jsonForm,
  }
}

const mapDispatchToProps = {
  setProjectJsonForm: jsonForm => setProjectJsonForm(jsonForm),
}

export default connect(mapStateToProps, mapDispatchToProps)(JsonFormInfo);