import React from 'react';
import PropTypes from 'prop-types';
import { Table, Button } from '../../common/components/web';
import ComponentPropForm from './ComponentPropForm';

export default class ComponentPropsView extends React.PureComponent {
  static propTypes = {
    componentId: PropTypes.number.isRequired,
    props: PropTypes.array.isRequired,
    prop: PropTypes.object,
    addProp: PropTypes.func.isRequired,
    editProp: PropTypes.func.isRequired,
    deleteProp: PropTypes.func.isRequired,
    onPropSelect: PropTypes.func.isRequired,
    onFormSubmitted: PropTypes.func.isRequired,
    subscribeToMore: PropTypes.func.isRequired
  };

  handleEditProp = (id, name, description, type) => {
    const { onPropSelect } = this.props;
    onPropSelect({ id, name, description, type });
  };

  handleDeleteProp = id => {
    const { prop, onPropSelect, deleteProp } = this.props;

    if (prop.id === id) {
      onPropSelect({ id: null, name: '', description: '', type: '' });
    }

    deleteProp(id);
  };

  onSubmit = () => values => {
    const { prop, componentId, addProp, editProp, onPropSelect, onFormSubmitted } = this.props;

    if (prop.id === null) {
      addProp(values.name, values.description, values.type, componentId);
    } else {
      editProp(prop.id, values.name, values.description, values.type);
    }

    onPropSelect({ id: null, name: '', description: '', type: '' });
    onFormSubmitted();
  };

  render() {
    const { componentId, prop, props } = this.props;
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: 'Actions',
        key: 'actions',
        width: 120,
        render: (text, record) => (
          <div style={{ width: 120 }}>
            <Button
              color="primary"
              size="sm"
              className="edit-prop"
              onClick={() => this.handleEditProp(record.id, record.name, record.description, record.type)}
            >
              Edit
            </Button>{' '}
            <Button
              color="primary"
              size="sm"
              className="delete-comment"
              onClick={() => this.handleDeleteProp(record.id)}
            >
              Delete
            </Button>
          </div>
        )
      }
    ];
    return (
      <div>
        <h3>Props</h3>
        <ComponentPropForm componentId={componentId} onSubmit={this.onSubmit()} initialValues={prop} />
        <h1 />
        <Table dataSource={props} columns={columns} />
      </div>
    );
  }
}
