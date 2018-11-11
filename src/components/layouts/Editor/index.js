import { connect } from "react-redux";
import EditorView from './editorView';
import { setTree, setDefaultTree, setNodePath } from '../../../services/sortableTreeService/actions';
import { setModalVisibility, setModalContent } from '../../../services/modalService/actions';

const mapStateToProps = state => {
  return {
    components: state.componentsServiceReducer.components,
    tree: state.sortableTreeServiceReducer.tree,
    defaultTree: state.sortableTreeServiceReducer.defaultTree,
    getNodePath: state.sortableTreeServiceReducer.nodePath,
    modalVisible: state.modalServiceReducer.modalVisible,
    modalContent: state.modalServiceReducer.modalContent,
    searchData: state.componentsServiceReducer.searchData,
    projectTechno: state.projectSettingsServiceReducer.projectTechno,
    projectName: state.projectSettingsServiceReducer.projectName,
    projectType: state.projectSettingsServiceReducer.projectType,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    setTree: tree => dispatch(setTree(tree)),
    setDefaultTree: defaultTree => dispatch(setDefaultTree(defaultTree)),
    setNodePath: nodePath => dispatch(setNodePath(nodePath)),
    setModalVisibility: modalVisible => dispatch(setModalVisibility(modalVisible)),
    setModalContent: modalContent => dispatch(setModalContent(modalContent)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditorView);