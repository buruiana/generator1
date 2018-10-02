import React from 'react';
import Form from "react-jsonschema-form";
import { changeNodeAtPath } from 'react-sortable-tree';

const PropsForm = props => {
  const getNodeKey = ({ treeIndex }) => treeIndex;
  const schema = {
    type: "object",
    properties: {}
  };
  const properties = schema.properties;
  const propsInfo = props.modalContent.node.componentProps;

  propsInfo.map(prop => {
    properties[prop.name] = {
      type: "string",
      title: prop.name,
      val: prop.val,
      default: prop.val
    }
  });

  const onSubmit = data => {
    const { formData } = data;
    const { node, path } = props.getNodePath;
    const newProps = [];

    Object.keys(formData).forEach(key => {
      let prop = node.componentProps.filter(prop => prop.name === key);

      let newProp = {};
      if (prop) {
        newProp = {
          type: prop[0].type,
          name: prop[0].name,
          description: prop[0].description,
          val: formData[key]
        };
      } else {
        newProp = prop[0];
      }
      newProps.push(newProp);
    });

    const newNode = {...node};
    newNode.componentProps = newProps;

    const newTree = {
      treeData2: changeNodeAtPath({
        treeData: props.tree,
        path,
        getNodeKey,
        newNode
      })
    };

    props.setTree(newTree);
    props.setModalVisibility(false);
  };

  const log = (type) => console.log.bind(console, type);
  return (
    <Form schema={schema}
      onChange={log("changed")}
      onSubmit={onSubmit}
      onError={log("errors")}
    />
  );
}

export default PropsForm;