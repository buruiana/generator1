import React from 'react';
import SortableTree, { removeNodeAtPath } from 'react-sortable-tree';
import PropTypes from 'prop-types';
import 'react-sortable-tree/style.css';
import renderModal from '../../modals';
import Ace from '../AceEditor';
import { COMPONENT_INFO, PROPS_FORM } from '../../modals/constants';
import NavBarSettings from '../NavBarSettings';

const externalNodeType = 'yourNodeType';
const shouldCopyOnOutsideDrop = true;
const getNodeKey = ({ treeIndex }) => treeIndex;

const EditorView = props => {
  const remove = path => {
    const newTree = {
      treeData2: removeNodeAtPath({
        treeData: props.tree,
        path,
        getNodeKey
      })
    };
    props.setTree(newTree);
  };

  const showModal = (type, node, path) => {
    const nodePath = {
      node,
      path
    };
    props.setNodePath(nodePath);
    props.setModalVisibility(true);
    props.setModalContent({ node, type });
  };

  const renderSearchField = () => {
    return (
      <div className="row nopaddingLR">
        <div className='col-lg-8'>
          <input
            type="text"
            className="form-control"
            name="search"
            placeholder="Search"
            value='aaaaaa'
            //onChange={updateSearch}
          />
        </div><br />
      </div>
    );
  };

  return (
    <div>
      <NavBarSettings />
      {/* {renderSearchField()} */}
      <div
        style={{
          height: 800,
          width: '25%',
          float: 'left'
        }}
      >
        <SortableTree
          treeData={props.defaultTree}
          onChange={() => console.log('changed')}
          dndType={externalNodeType}
          shouldCopyOnOutsideDrop={shouldCopyOnOutsideDrop}
          getNodeKey={getNodeKey}
          generateNodeProps={({ node, path }) => ({
            buttons: [<button onClick={() => showModal(COMPONENT_INFO, node, path)}>I</button>]
          })}
        />
      </div>

      <div
        style={{
          height: 800,
          width: '45%',
          float: 'left'
        }}
      >
        <SortableTree
          treeData={props.tree}
          onChange={treeData2 => props.setTree({ treeData2 })}
          dndType={externalNodeType}
          shouldCopyOnOutsideDrop={shouldCopyOnOutsideDrop}
          getNodeKey={getNodeKey}
          generateNodeProps={({ node, path }) => ({
            buttons: [
              <button onClick={() => remove(path)}>-</button>,
              <button onClick={() => showModal(PROPS_FORM, node, path)}>P</button>
            ]
          })}
        />
      </div>
      <div
        style={{
          height: 800,
          width: '30%',
          float: 'left'
        }}
      >
        <Ace />
      </div>
      <div>{renderModal(props)}</div>
    </div>
  );
};

EditorView.propTypes = {
  tree: PropTypes.array,
  setTree: PropTypes.func,
  getDefaultTree: PropTypes.array,
  setModalVisibility: PropTypes.func,
  setModalContent: PropTypes.func,
  modalVisible: PropTypes.bool,
  modalContent: PropTypes.object,
  getNodePath: PropTypes.object,
  setNodePath: PropTypes.func
};

export default EditorView;
