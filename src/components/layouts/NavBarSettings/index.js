import NavBarSettings from './navBarSettings';
import { connect } from "react-redux";
import {
  setModalVisibility,
  setModalContent,
} from '../../../services/modalService/actions';


// const mapStateToProps = state => {
//   return {
//     modalContent: state.modalServiceReducer.modalContent,
//     getNodePath: state.sortableTreeServiceReducer.nodePath,
//     tree: state.sortableTreeServiceReducer.tree,
//   }
// }

const mapDispatchToProps = dispatch => {
  return {
    setModalVisibility: modalVisible => dispatch(setModalVisibility(modalVisible)),
    setModalContent: content => dispatch(setModalContent(content)),
  };
}

export default connect(null, mapDispatchToProps)(NavBarSettings);