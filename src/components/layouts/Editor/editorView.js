import React from 'react';
import SortableTree, { removeNodeAtPath } from 'react-sortable-tree';
import PropTypes from 'prop-types';
import 'react-sortable-tree/style.css';
import renderModal from '../../modals';

const externalNodeType = 'yourNodeType';
const shouldCopyOnOutsideDrop = true;
const getNodeKey = ({ treeIndex }) => treeIndex;

const EditorView = props => {
  console.log('console: EditorView-props', props);
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


  // const prepareData = (x, y) => {
  //   return {
  //     id: x.id,
  //     title: x.title,
  //     description: x.description,
  //     props: y
  //   };
  // };

  // const onSubmit = prop => values => {
  //   const data = prepareData(prop[0], values);
  //   const nodePath = props.getNodePath;
  //   const path = nodePath.path;
  //   const newTree = {
  //     treeData2: changeNodeAtPath({
  //       treeData: props.getTree,
  //       path,
  //       getNodeKey,
  //       newNode: data
  //     })
  //   };
  //   //props.setTree(newTree);
  //   console.log('newTree', newTree);
  //   props.setModalVisibility(false);
  // };

  return (
    <div>
      {/* {renderSearchField()} */}
      <div
        style={{
          height: 800,
          width: '40%',
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
            buttons: [<button onClick={() => showModal('componentInfo', node, path)}>I</button>]
          })}
        />
      </div>

      <div
        style={{
          height: 800,
          width: '60%',
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
              <button onClick={() => showModal('propsForm', node, path)}>P</button>
            ]
          })}
        />
        <div>{renderModal(props)}</div>
      </div>
    </div>
  );
};

EditorView.propTypes = {
  getTree: PropTypes.array,
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
