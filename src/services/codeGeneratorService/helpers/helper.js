import { getFlatDataFromTree } from 'react-sortable-tree';
import isEmpty from 'lodash/isEmpty';
import uniqBy from 'lodash/uniqBy';
import sortBy from 'lodash/sortBy';
import groupBy from 'lodash/groupBy';

export const getConstList = tree => {
  const flatData = getFlatDataFromTree({
    treeData: tree,
    getNodeKey: ({ treeIndex }) => treeIndex,
    ignoreCollapsed: false,
  });

  let constList = [];

  flatData.map(el => {
    return el.node.componentProps.filter(prop => {
      if (!isEmpty(prop.val) && prop.propType === 'PropTypes.func') {
        constList.push(prop.val.replace(/[\W_]+/g, ''));
      }
    });
  });
  return constList;
};

export const getStylesList = tree => {
  const flatData = getFlatDataFromTree({
    treeData: tree,
    getNodeKey: ({ treeIndex }) => treeIndex,
    ignoreCollapsed: false,
  });

  let stylesList = [];

  flatData.map(el => {
    return el.node.componentProps.filter(prop => {
      if (!isEmpty(prop.val) && prop.name === 'className') {
        stylesList.push(prop.val.replace(/[\W_]+/g, ''));
      }
    });
  });

  return stylesList;
};

export const getImportList = tree => {
  const flatData = getFlatDataFromTree({
    treeData: tree,
    getNodeKey: ({ treeIndex }) => treeIndex,
    ignoreCollapsed: false,
  });

  const defaultImports = uniqBy(
    flatData.filter(el => el.node.componentImport !== '-'),
    'node.componentImport');
  const sortedDefaultImports = sortBy(defaultImports, 'node.title');

  const nonDefaultImports = uniqBy(
    flatData.filter(el => el.node.componentImport === '-'),
    'node.title');
  const sortedNonDefaultImports = sortBy(nonDefaultImports, 'node.title');
  const groupSortedNonDefaultImports = groupBy(sortedNonDefaultImports, 'node.providerPath');

  const importList = {
    sortedDefaultImports,
    groupSortedNonDefaultImports
  };

  return importList;
};
