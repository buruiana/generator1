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

const mapDispatchToProps = {
  setProjectJsonForm: jsonForm => setProjectJsonForm(jsonForm),
  setNodePath: nodePath => setNodePath(nodePath),
}

export default connect(mapStateToProps, mapDispatchToProps)(JsonFormInfoForm);