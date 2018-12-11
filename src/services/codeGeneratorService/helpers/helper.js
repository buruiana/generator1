import { getFlatDataFromTree } from 'react-sortable-tree';
import isEmpty from 'lodash/isEmpty';
import find from 'lodash/find';
import get from 'lodash/get';

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

  let importList = [];

  flatData.map(element => {
    const el = element.node;

    if (el.componentImport && el.componentImport !== '-') {
      const obj = find(importList, item => item.name === el.componentImport);

      if (!isEmpty(obj)) {
        if (el.isDefault) {
          if (!find(obj['default'], item => item === el.title)) {
            obj['default'].push(el.title);
            obj.hasDefaults = true;
          }
        } else {
          if (!find(obj['nonDefault'], item => item === el.title)) {
            obj['nonDefault'].push(el.title);
            obj.hasNonDefaults = true;
          }
        }
      } else {
        if (el.isDefault) {
          importList.push({
            name: el.componentImport,
            'default': [el.title],
            'nonDefault': [],
            hasDefaults: true,
            hasNonDefaults: false,
          });
        } else {
          importList.push({
            name: el.componentImport,
            'default': [],
            'nonDefault': [el.title],
            hasDefaults: false,
            hasNonDefaults: true,
          });
        }
      }
    } else {
      const obj = find(importList, item => item.name === el.providerPath);

      if (!isEmpty(obj)) {
        if (el.isDefault) {
          if (!find(obj['default'], item => item === el.providerPath)) {
            obj['default'].push(el.title);
            obj.hasDefaults = true;
          }
        } else {
          if (!find(obj['nonDefault'], item => item === el.title)) {
            obj['nonDefault'].push(el.title);
            obj.hasNonDefaults = true;
          }
        }
      } else {
        if (el.isDefault) {
          importList.push({
            name: el.providerPath,
            'default': [el.title],
            'nonDefault': [],
            hasDefaults: true,
            hasNonDefaults: false,
          });
        } else {
          importList.push({
            name: el.providerPath,
            'default': [],
            'nonDefault': [el.title],
            hasDefaults: false,
            hasNonDefaults: true,
          });
        }
      }
    }
  });

  return importList;
};
