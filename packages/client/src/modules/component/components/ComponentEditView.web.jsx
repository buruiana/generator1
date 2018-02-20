import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';

import { PageLayout } from '../../common/components/web';
import ComponentForm from './ComponentForm';
import ComponentProps from '../containers/ComponentProps';
import settings from '../../../../../../settings';

const onSubmit = (component, addComponent, editComponent) => values => {
  if (component) {
    editComponent(component.id, values.name, values.description, values.technology, values.provider);
  } else {
    addComponent(values.name, values.description, values.technology, values.provider);
  }
};

const ComponentEditView = ({
  loading,
  component,
  match,
  location,
  subscribeToMore,
  addComponent,
  editComponent,
  providers
}) => {
  let componentObj = component;
  // if new Component was just added read it from router
  if (!componentObj && location.state) {
    componentObj = location.state.component;
  }

  const renderMetaData = () => (
    <Helmet
      title={`${settings.app.name} - Edit Component`}
      meta={[
        {
          name: 'description',
          content: 'Edit Component example page'
        }
      ]}
    />
  );

  if (loading && !componentObj) {
    return (
      <PageLayout>
        {renderMetaData()}
        <div className="text-center">Loading...</div>
      </PageLayout>
    );
  } else {
    return (
      <PageLayout>
        {renderMetaData()}
        <Link id="back-button" to="/components">
          Back
        </Link>
        <h2>{component ? 'Edit' : 'Create'} Component</h2>
        <ComponentForm
          onSubmit={onSubmit(componentObj, addComponent, editComponent)}
          initialValues={componentObj}
          providers={providers}
        />
        <br />
        {componentObj && (
          <ComponentProps
            componentId={Number(match.params.id)}
            props={componentObj.props}
            subscribeToMore={subscribeToMore}
          />
        )}
      </PageLayout>
    );
  }
};

ComponentEditView.propTypes = {
  loading: PropTypes.bool.isRequired,
  component: PropTypes.object,
  addComponent: PropTypes.func.isRequired,
  editComponent: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  subscribeToMore: PropTypes.func.isRequired
};

export default ComponentEditView;
