import JsonFormInfoForm from './jsonFormInfoForm';
import { connect } from "react-redux";
import {
  setProjectJsonForm
} from '../../../services/projectSettingsService/actions';

const mapStateToProps = state => {
  return {
    jsonForm: state.projectSettingsServiceReducer.jsonForm,
    nodePath: state.sortableTreeServiceReducer.nodePath,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setProjectJsonForm: jsonForm => dispatch(setProjectJsonForm(jsonForm)),
    setNodePath: nodePath => dispatch(setNodePath(nodePath)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(JsonFormInfoForm);