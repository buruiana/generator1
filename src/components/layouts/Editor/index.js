import { connect } from "react-redux";
import EditorView from './editorView';
import { setTree, setDefaultTree, setNodePath } from '../../../services/sortableTreeService/actions';
import { setAllModals, setCurrentModal } from '../../../services/modalService/actions';

const mapStateToProps = state => {
  return {
    components: state.componentsServiceReducer.components,
    tree: state.sortableTreeServiceReducer.tree,
    defaultTree: state.sortableTreeServiceReducer.defaultTree,
    getNodePath: state.sortableTreeServiceReducer.nodePath,
    currentModal: state.modalServiceReducer.currentModal,
    allModals: state.modalServiceReducer.allModals,
    searchData: state.componentsServiceReducer.searchData,
    projectTechno: state.projectSettingsServiceReducer.projectTechno,
    projectName: state.projectSettingsServiceReducer.projectName,
    projectType: state.projectSettingsServiceReducer.projectType,
    providers: state.providersServiceReducer.providers,
    projectError: state.projectSettingsServiceReducer.err,
    appSettings: state.appSettingsServiceReducer.settings,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    setTree: tree => dispatch(setTree(tree)),
    setDefaultTree: defaultTree => dispatch(setDefaultTree(defaultTree)),
    setNodePath: nodePath => dispatch(setNodePath(nodePath)),
    setCurrentModal: currentModal => dispatch(setCurrentModal(currentModal)),
    setAllModals: allModals => dispatch(setAllModals(allModals)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditorView);