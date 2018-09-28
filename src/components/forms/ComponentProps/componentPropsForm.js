import React from 'react';
import Form from "react-jsonschema-form";

const PropsForm = props => {

  const { propType, name, description } = props.prop;

  const schema = {
    type: "object",
    properties: {
      name: { type: "string", title: 'Name', default: name },
      description: { type: "string", title: 'Description', default: description },
      propType: { type: "string", title: 'Type', default: propType },
    }
  };

  const onSubmit = data => {
    const { formData } = data;
    const { node, path } = props.getNodePath;
    const newProps = [];

    Object.keys(formData).forEach(key => {
      let prop = node.props.filter(prop => prop.name === key);

      let newProp = {};
      if (prop) {
        newProp = {
          type: "string",
          name: { type: "string", title: "Name", default: prop[0].name },
          description: { type: "string", title: "Description", default: prop[0].description },
          propType: { type: "string", title: "Type", default: prop[0].propType },
        };
      } else {
        newProp = prop[0];
      }
      newProps.push(newProp);
    });

    const newNode = {...node};
    newNode.props = newProps;

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