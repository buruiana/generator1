import { connect } from "react-redux";
import AppStructureView from './appStructureView';
import { setAppTree, setAppCode, setAppFile } from '../../../services/appSettingsService/actions';

const mapStateToProps = state => {
  return {
    tree: state.appSettingsServiceReducer.tree,
    file: state.appSettingsServiceReducer.file,
    code: state.appSettingsServiceReducer.code,
    codeDone: state.appSettingsServiceReducer.codeDone,
  }
}

const mapDispatchToProps = {
    setAppTree: tree => setAppTree(tree),
    setAppFile: file => setAppFile(file),
    setAppCode: code => setAppCode(code),
}

export default connect(mapStateToProps, mapDispatchToProps)(AppStructureView
);