import PropsForm from './propsForm';
import { connect } from "react-redux";


const mapStateToProps = state => {
  return {
    modalContent: state.modalServiceReducer.modalContent,
    getNodePath: state.sortableTreeServiceReducer.nodePath,
    tree: state.sortableTreeServiceReducer.tree,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setTree: tree => dispatch(setProsetTreevider(tree)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PropsForm);