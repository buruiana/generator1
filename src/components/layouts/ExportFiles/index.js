import { connect } from "react-redux";
import ExportFilesView from './exportFilesView';
import { exportProjectFiles } from '../../../services/projectSettingsService/actions';
import {
  setCurrentModal,
  setAllModals,
} from '../../../services/modalService/actions';

const mapStateToProps = state => {
  return {
    projectSettings: state.projectSettingsServiceReducer,
    aceTabs: state.aceTabsServiceReducer.aceTabs,
    code: state.codeGeneratorServiceReducer,
    allModals: state.modalServiceReducer.allModals,
    exported: state.projectSettingsServiceReducer.exported,
  }
};

const mapDispatchToProps = {
  exportProjectFiles: data => exportProjectFiles(data),
  setCurrentModal: type => setCurrentModal(type),
  setAllModals: allModals => setAllModals(allModals),
};

export default connect(mapStateToProps, mapDispatchToProps)(ExportFilesView);