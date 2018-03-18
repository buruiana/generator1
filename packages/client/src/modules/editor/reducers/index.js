/* -----------------------------------------
ActionTypes
------------------------------------------*/
const COMPONENTS_SET = 'COMPONENTS_SET';
const TREE_SET = 'TREE_SET';
const DEFAULT_TREE_SET = 'DEFAULT_TREE_SET';
const MODAL_VISIBILITY_SET = 'MODAL_VISIBILITY_SET';
const MODAL_CONTENT_SET = 'MODAL_CONTENT_SET';

/* -----------------------------------------
Reducer
------------------------------------------*/
const defaultState = {
  components: [],
  tree: [],
  defaultTree: [],
  modalVisible: false,
  modalContent: {
    props: []
  }
};

export default function(state = defaultState, action) {
  switch (action.type) {
    case COMPONENTS_SET:
      return {
        ...state,
        components: action.payload
      };
    case TREE_SET:
      return {
        ...state,
        tree: action.payload.treeData2
      };
    case DEFAULT_TREE_SET:
      return {
        ...state,
        defaultTree: action.payload
      };
    case MODAL_VISIBILITY_SET:
      return {
        ...state,
        modalVisible: action.payload
      };
    case MODAL_CONTENT_SET:
      return {
        ...state,
        modalContent: action.payload
      };
    default:
      return state;
  }
}

/* -----------------------------------------
Actions
------------------------------------------*/
export function setComponents(components) {
  return {
    type: COMPONENTS_SET,
    payload: components
  };
}

export function setTree(tree) {
  return {
    type: TREE_SET,
    payload: tree
  };
}

export function setDefaultTree(tree) {
  return {
    type: DEFAULT_TREE_SET,
    payload: tree
  };
}

export function setModalVisibility(modalVisible) {
  return {
    type: MODAL_VISIBILITY_SET,
    payload: modalVisible
  };
}

export function setModalContent(modalContent) {
  return {
    type: MODAL_CONTENT_SET,
    payload: modalContent
  };
}

/* -----------------------------------------
Selectors
------------------------------------------*/
export const getComponents = state => state.editor.components;
export const getTree = state => state.editor.tree;
export const getDefaultTree = state => state.editor.defaultTree;
export const getModalVisible = state => state.editor.modalVisible;
export const getModalContent = state => state.editor.modalContent;
