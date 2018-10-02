import React from 'react';
import Form from "react-jsonschema-form";
import isEmpty from 'lodash/isEmpty';

const ComponentPropsForm = props => {
  const propTypesEnums = !isEmpty(props.propTypes)
    ? props.propTypes.map(p => p.name)
    : [];

  const schema = {
    type: "array",
    items: {
      type: 'object',
      required: ['name'],
      properties: {
        name: { type: 'string', title: 'Name' },
        description: { type: 'string', title: 'Description' },
        propType: {
          type: 'string',
          title: 'PropType',
          enum: propTypesEnums,
        },
      }
    },
  };

  const uiSchema = {
    items: {
      description: {
        "ui:widget": "textarea",
        "ui:options": {
          rows: 5
        }
      },
      propType: { "ui:placeholder": "Choose an propType" },
    },
  };

  const onSubmit = data => {
    const { formData } = data;
    let newComponent = {
      title: props.component.title,
      description: props.component.description,
      provider: props.component.provider,
      techno: props.component.techno,
      componentProps: formData,
      id: props.component.id,
    };

    props.setSelectedComponent(newComponent);
    props.setComponent();
    props.setModalVisibility(false);
  };

  const ArrayFieldTemplate = props => {
    return (
      <div className={props.className}>
        {props.items &&
          props.items.map(element => (
            <div key={element.index}>
              <div>{element.children}</div>
              {element.hasMoveDown && (
                <button
                  onClick={element.onReorderClick(
                    element.index,
                    element.index + 1
                  )}>
                  Down
              </button>
              )}
              {element.hasMoveUp && (
                <button
                  onClick={element.onReorderClick(
                    element.index,
                    element.index - 1
                  )}>
                  Up
              </button>
              )}
              <button onClick={element.onDropIndexClick(element.index)}>
                Delete
            </button>
              <hr />
            </div>
          ))}

        {props.canAdd && (
          <div className="row">
            <p className="col-xs-3 col-xs-offset-9 array-item-add text-right">
              <button onClick={props.onAddClick} type="button">
                Add New Prop
            </button>
            </p>
          </div>
        )}
      </div>
    );
  };

  const log = (type) => console.log.bind(console, type);
  return (
    <Form schema={schema}
      uiSchema={uiSchema}
      onChange={log("changed")}
      onSubmit={onSubmit}
      onError={log("errors")}
      ArrayFieldTemplate={ArrayFieldTemplate}
      formData={props.component.componentProps}
    />
  );
}

export default ComponentPropsForm;