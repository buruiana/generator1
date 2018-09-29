import React from 'react';
import Form from "react-jsonschema-form";

const ActionsForm = props => {
  const schema = {
    type: "array",
    items: {
      type: 'object',
      properties: {
        name: { type: 'string', title: 'Actions' },
        isActive: {type: 'boolean'}
      }
    },
  };

  const uiSchema = {
    items: { 'ui:emptyValue': '' },
  };

  const onSubmit = data => {
    const { formData } = data;
    props.setActions(formData);
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
                Add Action
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
      formData={props.actions}
    />
  );
}

export default ActionsForm;