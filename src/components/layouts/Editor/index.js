import React, { Component } from 'react';
import { connect } from "react-redux";
import EditorView from './editorView';
import { getAllComponents } from '../../../services/componentsService/actions';
import { getAllTechnos } from '../../../services/technosService/actions';
import { getAllProviders } from '../../../services/providersService/actions';
import { getAllProjectTypes } from '../../../services/projectTypesService/actions';
import { setTree, setDefaultTree, setNodePath } from '../../../services/sortableTreeService/actions';
import { setModalVisibility, setModalContent } from '../../../services/modalService/actions';

class Editor extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  componentWillMount() {
    this.props.getAllComponents();
    this.props.getAllProviders();
  }

  render() {
    return <EditorView {...this.props} />;
  }
};

const mapStateToProps = state => {
  return {
    components: state.componentsServiceReducer.components,
    tree: state.sortableTreeServiceReducer.tree,
    defaultTree: state.sortableTreeServiceReducer.defaultTree,
    getNodePath: state.sortableTreeServiceReducer.nodePath,
    modalVisible: state.modalServiceReducer.modalVisible,
    modalContent: state.modalServiceReducer.modalContent,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAllComponents: () => dispatch(getAllComponents()),
    getAllProviders: () => dispatch(getAllProviders()),
    setTree: tree => dispatch(setTree(tree)),
    setDefaultTree: defaultTree => dispatch(setDefaultTree(defaultTree)),
    setNodePath: nodePath => dispatch(setNodePath(nodePath)),
    setModalVisibility: modalVisible => dispatch(setModalVisibility(modalVisible)),
    setModalContent: modalContent => dispatch(setModalContent(modalContent)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Editor);