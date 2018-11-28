import React from 'react';
import SortableTree, { removeNodeAtPath } from 'react-sortable-tree';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import get from 'lodash/get';
import 'react-sortable-tree/style.css';
import renderModal from '../../modals';
import Ace from '../AceEditor';
import AppStructureView from '../AppStructure';
import {
  COMPONENT_INFO,
  PROPS_FORM,
} from '../../modals/constants';
import {
  SERVICE,
  COMPONENT,
  APPLICATION,
} from '../../../utils/constants';
import NavBarSettings from '../NavBarSettings';
import ComponentSearchForm from '../../forms/ComponentSearch';
import { fillNodeData } from '../../../services/sortableTreeService/helper';
import SaveFile from '../../../utils/saveFile';

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
    setNewTree(fillNodeData(newTree.treeData2));
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
    return props.projectName
      ? < ComponentSearchForm />
      : null;
  };

  const renderAppStructure = () => {
    return props.projectType === APPLICATION
      ? <AppStructureView />
      : null;
  };

  const onChange = treeData2 => {
    setNewTree(fillNodeData(treeData2));
  };

  const setNewTree = treeData2 => props.setTree({ treeData2 });

  const filteredDefaultTree = () => {
    return props.defaultTree.filter(el => {
      if (!isEmpty(props.searchData) && props.searchData.name) {
        return (el.title.toLowerCase().indexOf(props.searchData.name.toLowerCase()) !== -1
          && el.techno === props.searchData.projectTechno
          && get(props.searchData, 'provider', el.provider) === el.provider)
      }
      return (get(props.searchData, 'provider', el.provider) === el.provider
        && get(props.searchData, 'projectTechno', el.techno) === el.techno);
    });
  };

  const renderAce = () => {
    return (props.projectType === SERVICE || props.projectType === COMPONENT)
      ? <div className='paddingTop'>< Ace /></div>
      : null;
  };

  const returnComponentBlock = () => {
    return (
      <div className='paddingTop'>
        {renderSearchField()}
        <div
          style={{
            height: 800,
            width: '25%',
            float: 'left'
          }}
        >
          <SortableTree
            treeData={filteredDefaultTree()}
            onChange={() => console.log('changed')}
            dndType={externalNodeType}
            shouldCopyOnOutsideDrop={shouldCopyOnOutsideDrop}
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
            onChange={onChange}
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
      </div>
    );
  };

  const renderComponentBlock = () => {
    return props.projectType === SERVICE
      ? null
      : props.projectType === COMPONENT
        ? returnComponentBlock()
        : null;
  };

  const exportFile = () => {
    console.log('console: ---------------', );
    return (<SaveFile data='aaaaaaaaaaaa' type='js' fileName='xxx' />);
  };

  const xxx = () => {
    return (
      <div>
        <a href='data:text/plain;UTF-8,zzzzzzz' download='zzzzzzzzz.js' >ddddddd</a>
        <a href='data:text/plain;UTF-8,ccccccc' download='ccccccccc.js' >ccccccc</a>
      </div>
    );
  };

  const renderExportFiles = () => {
    return props.projectName
      ? xxx()
      : null;
  };

  return (
    <div>
      <NavBarSettings />
      {renderComponentBlock()}
      {renderAppStructure()}
      <div
        style={{
          height: 800,
          width: '30%',
          float: 'left'
        }}
      >
        {renderExportFiles()}
        {renderAce()}
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
