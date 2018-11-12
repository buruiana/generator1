import { connect } from "react-redux";
import AppStructureView from './appStructureView';
import { setAppTree, setAppCode, setAppFile } from '../../../services/appSettingsService/actions';

const mapStateToProps = state => {
  return {
    tree: state.appSettingsServiceReducer.tree,
    file: state.appSettingsServiceReducer.file,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setAppTree: tree => dispatch(setAppTree(tree)),
    setAppFile: file => dispatch(setAppFile(file)),
    setAppCode: code => dispatch(setAppCode(code)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppStructureView
);