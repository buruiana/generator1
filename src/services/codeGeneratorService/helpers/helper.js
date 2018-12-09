import { getFlatDataFromTree } from 'react-sortable-tree';
import isEmpty from 'lodash/isEmpty';

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


