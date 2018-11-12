import { walk, changeNodeAtPath } from 'react-sortable-tree';
import isEmpty from 'lodash/isEmpty';
import get from 'lodash/get';

export const fillNodeData = treeData => {
  walk({
    treeData: treeData,
    getNodeKey: ({ treeIndex: number }) => number,
    callback: rowInfo => {
      let node = {
        ...rowInfo.node,
      };
      node.hasChildren = !isEmpty(node.children);
      const hasComponentPropsVals = get(node, 'componentProps', []).filter(el => el.val);
      node.hasComponentPropsVals = !isEmpty(hasComponentPropsVals);

      treeData = changeNodeAtPath({
        treeData: treeData,
        path: rowInfo.path,
        newNode: node,
        getNodeKey: ({ treeIndex }) => treeIndex,
        ignoreCollapsed: false
      });
    },
    ignoreCollapsed: false
  });

  return treeData;
}