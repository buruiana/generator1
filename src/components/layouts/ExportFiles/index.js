import { connect } from "react-redux";
import ExportFilesView from './exportFilesView';
import {
  exportProjectFiles,
} from '../../../services/projectSettingsService/actions';

const mapStateToProps = state => {
  return {
    projectSettings: state.projectSettingsServiceReducer,
    aceTabs: state.aceTabsServiceReducer.aceTabs,
    code: state.codeGeneratorServiceReducer,
  }
};

const mapDispatchToProps = {
  exportProjectFiles: data => exportProjectFiles(data),
};

export default connect(mapStateToProps, mapDispatchToProps)(ExportFilesView);