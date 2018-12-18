import PropsForm from './propsForm';
import { connect } from "react-redux";
import { setTree } from '../../../services/sortableTreeService/actions';

const mapStateToProps = state => {
  return {
    getNodePath: state.sortableTreeServiceReducer.nodePath,
    tree: state.sortableTreeServiceReducer.tree,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setTree: tree => dispatch(setTree(tree)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PropsForm);