import { getFlatDataFromTree } from 'react-sortable-tree';
import isEmpty from 'lodash/isEmpty';
import uniqBy from 'lodash/uniqBy';
import sortBy from 'lodash/sortBy';
import groupBy from 'lodash/groupBy';
import reverse from 'lodash/reverse';

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

export const getTree = flatTree => {
  let code = '';
  let parentsList = [];
  let elIdx = 0;

  const prepareTree = tree => {
    tree.map(el => {
      const currentId = el.node.id;
      const nextEl = (tree.length > elIdx + 1)
        ? tree[elIdx + 1]
        : null;
      const hasChildren = !isEmpty(el.node.children);
      const hasComponentProps = !isEmpty(el.node.componentProps);
      const hasParent = !isEmpty(el.parentNode);
      const closeTag = hasChildren
        ? '>'
        : ' />';

      if (hasChildren) parentsList.push(el.node.title);

      const getComponentProps = () => {
        let componentProps = '';
        if (hasComponentProps) {
          el.node.componentProps.map(el => {
            if (!isEmpty(el.val)) componentProps += `\n${el.name}=${el.val}\n`;
          });
        }
        return componentProps;
      };

      code += `<${el.node.title}${getComponentProps()}${closeTag}`;

      // set the parent data
      if (hasParent) {
        const currentParentId = el.parentNode.id;
        const currentParent = tree.filter(el => el.node.id === currentParentId);
        const currentParentLastChild = (el.parentNode.children.length > 1)
          ? el.parentNode.children[el.parentNode.children.length - 1].id
          : el.parentNode.children[0].id;

        // check if current element is the last child
        if (currentId === currentParentLastChild && !hasChildren) {
          code += `</ ${parentsList[parentsList.length - 1]}>`;
          parentsList.pop();
        }

        // check next elemen path
        if (!isEmpty(nextEl) && (currentParent[0].path.length > nextEl.path.length)) {
          code += `</ ${parentsList[parentsList.length - 1]}>`;
          parentsList.pop();
        }
      }

      elIdx++;
      return code;
    });

    // close remaining parents
    if (parentsList.length) {
      reverse(parentsList).map(el => {
        code += `</ ${el}>`;
      });
    }

    return code;
  };

  code += prepareTree(flatTree);

  return code;
};

export const getLifeCycleCode = lifeCycleMethods => {

  let code = '';
  if (lifeCycleMethods.componentWillMount) {
    code += `componentWillMount() {};\n`;
  }

  if (lifeCycleMethods.componentDidMount) {
    code += `componentDidMount() {};\n`;
  }

  if (lifeCycleMethods.componentWillReceiveProps) {
    code += `componentWillReceiveProps() {};\n;`
  }

  if (lifeCycleMethods.shouldComponentUpdate) {
    code += `shouldComponentUpdate() {};\n`;
  }

  if (lifeCycleMethods.componentWillUpdate) {
    code += `componentWillUpdate() {};\n`;
  }

  if (lifeCycleMethods.componentDidUpdate) {
    code += `componentDidUpdate() {};\n`;
  }

  if (lifeCycleMethods.componentWillUnmount) {
    code += `componentWillUnmount() {}\n;`
  }

  return code + '\n';
};

export const getConstrunctor = (hasConstructor, hasState, constList) => {
  let code = '';
  if (hasConstructor) {
    code += ` constructor(props) {\n`;
      code += `   super(props);\n`

      if (hasState) {
        code += `   this.state = {\n`;

        code += `   };\n\n`;
      }

    if (!isEmpty(constList)) {
      code += `   const constList = ['${constList.toString().replace(/,/g, "', '")}'];\n`;
      code += `   constList.map(name => this[name] = this[name].bind(this));\n\n`;
    }
    code += ` };\n\n`;
  }

  return code;
};