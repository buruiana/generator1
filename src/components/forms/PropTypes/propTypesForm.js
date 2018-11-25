import React from 'react';
import Form from "react-jsonschema-form";
import isEmpty from 'lodash/isEmpty';
import { Link } from "react-router";
import PageHeader from 'react-bootstrap/lib/PageHeader';
import { history } from "../../../redux/store.js";

const PropTypesForm = props => {

  const propTypesArray = props.propTypes.filter(propType => propType.id === props.params.id);
  let propType = {};
  if (!isEmpty(propTypesArray)) {
    propType = propTypesArray[0]
  } else {
    propType = {
      name: '',
      id: '',
      path: '',
    };
  }
  console.log('console: propTypepropType', propType);
  const { name, id } = propType;
  const schema = {
    type: "object",
    required: ["name"],
    properties: {
      id: { type: "string", title: "Id", default: id },
      name: { type: "string", title: "Name", default: name },
    }
  };
  const uiSchema = {
    id: { "ui:widget": "hidden" }
  };

  const onSubmit = data => {
    const { formData } = data;
    props.setPropType(formData);
    history.push('/propTypes');
  };

  const log = (type) => console.log.bind(console, type);
  return (
    <div className="middle20">
      <PageHeader>
        {propType.name || 'New PropType'}
      </PageHeader>
      <Link to={`/propTypes`} className="linkStyle">Back</Link>
      <Form schema={schema}
        uiSchema={uiSchema}
        onChange={log("changed")}
        onSubmit={onSubmit}
        onError={log("errors")}
        />
    </div>
  );
}

export default PropTypesForm;