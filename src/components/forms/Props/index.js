import PropsForm from './propsForm';
import { connect } from "react-redux";
import { setTree } from '../../../services/sortableTreeService/actions';
import { setModalVisibility } from '../../../services/modalService/actions';


const mapStateToProps = state => {
  return {
    modalContent: state.modalServiceReducer.modalContent,
    getNodePath: state.sortableTreeServiceReducer.nodePath,
    tree: state.sortableTreeServiceReducer.tree,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setTree: tree => dispatch(setTree(tree)),
    setModalVisibility: modalVisible => dispatch(setModalVisibility(modalVisible)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PropsForm);