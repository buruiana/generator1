import { connect } from "react-redux";
import ExportFilesView from './exportFilesView';
import {
  deleteComponent,
} from '../../../services/componentsService/actions';

const mapStateToProps = state => {
  return {
    projectSettings: state.projectSettingsServiceReducer,
    aceTabs: state.aceTabsServiceReducer.aceTabs,
    code: state.codeGeneratorServiceReducer,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    deleteComponent: component => dispatch(deleteComponent(component)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ExportFilesView);