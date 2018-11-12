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
      if (!isEmpty(prop.val)) {
        constList.push(prop.val);
      }
    });
  });
  return constList;
};

