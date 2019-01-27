import PropsForm from './propsForm';
import { connect } from "react-redux";
import { setTree } from '../../../services/sortableTreeService/actions';

const mapStateToProps = state => {
  return {
    getNodePath: state.sortableTreeServiceReducer.nodePath,
    tree: state.sortableTreeServiceReducer.tree,
  }
}

const mapDispatchToProps = {
  setTree: tree => setTree(tree),
}

export default connect(mapStateToProps, mapDispatchToProps)(PropsForm);