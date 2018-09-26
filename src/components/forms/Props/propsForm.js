import React from 'react';
import Form from "react-jsonschema-form";
import { changeNodeAtPath } from 'react-sortable-tree';
import { boxArray } from '../../../utils';

const PropsForm = props => {
  console.log('console: ------------', props);

  const getNodeKey = ({ treeIndex }) => treeIndex;
  const schema = {
    type: "object",
    properties: {}
  };
  const properties = schema.properties;
  const propsInfo = boxArray(props.modalContent.node.props);

  propsInfo.map(prop => {
    properties[prop.name] = {
      type: "string",
      title: prop.name
    }
  });

    // const onSubmit = data => {
  //   console.log('console: aaaaaaaaa', data);
  //   console.log('console: bbbbbbbbb', modalContent.node);

  //   const { props } = { ...modalContent.node };
  //   console.log('console: props', Object.prototype.toString.call(props) != '[object Array]');
  //   let el = {};
  //   Object.keys(data.formData).forEach(key => {
  //     console.log('console: ddddddd', data.formData[key]);
  //     el = props.forEach(el => {
  //       console.log('console: oooooo', key === el.name , key, el );
  //       return el.name === key;
  //     });
  //     //el.val = data.formData[key];
  //     console.log('console: uuuuu', el);
  //   });

  //   console.log('console: eeeeeeeee', el);
  // }

  // const prepareData = row => {
  //   const element = {

  //   }
  // };
  //   const prepareData = (x, y) => {
  //   return {
  //     id: x.id,
  //     title: x.title,
  //     description: x.description,
  //     props: y
  //   };
  // };

  // const onSubmit = prop => values => {
  //   console.log('console: 11111', prop);
  //   console.log('console: 22222', values);
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

  const onSubmit = data => {
    const { formData } = data;

    const { node, path } = props.getNodePath;
    const newNode = { ...node };

    const newProps = Object.keys(formData).forEach(key => {
      console.log(key, formData[key]);
      let prop = node.props.filter(prop => {
        return prop.name === key;
      });
      console.log('console: prop', prop);
      //const newProp = { ...prop, val: formData[key]};
      prop[0].val = formData[key];
      console.log('console: newProp', newProp);
      return prop;
    });
    console.log('console: newProps', prop);
    const newTree = {
      treeData2: changeNodeAtPath({
        treeData: props.tree,
        path,
        getNodeKey,
        newNode
      })
    };
    console.log('console: newProps', newProps);
    console.log('console: newTree', newTree);
    //props.setTree(newTree);

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