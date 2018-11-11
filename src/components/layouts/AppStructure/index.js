import { connect } from "react-redux";
import AppStructureView from './appStructureView';
import { setAppTree } from '../../../services/appSettingsService/actions';

const mapStateToProps = state => {
  return {
    tree: state.appSettingsServiceReducer.tree,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setAppTree: tree => dispatch(setAppTree(tree)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppStructureView
);