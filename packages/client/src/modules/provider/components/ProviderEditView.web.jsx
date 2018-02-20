import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';

import { PageLayout } from '../../common/components/web';
import ProviderForm from './ProviderForm';
import settings from '../../../../../../settings';

const onSubmit = (provider, addProvider, editProvider) => values => {
  if (provider) {
    editProvider(provider.id, values.name, values.path);
  } else {
    addProvider(values.name, values.path);
  }
};

const ProviderEditView = ({ loading, provider, location, addProvider, editProvider }) => {
  let providerObj = provider;

  // if new provider was just added read it from router
  if (!providerObj && location.state) {
    providerObj = location.state.provider;
  }

  const renderMetaData = () => (
    <Helmet
      title={`${settings.app.name} - Edit provider`}
      meta={[
        {
          name: 'description',
          content: 'Edit provider example page'
        }
      ]}
    />
  );

  if (loading && !providerObj) {
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
        <Link id="back-button" to="/providers">
          Back
        </Link>
        <h2>{provider ? 'Edit' : 'Create'} Provider</h2>
        <ProviderForm onSubmit={onSubmit(providerObj, addProvider, editProvider)} initialValues={providerObj} />
      </PageLayout>
    );
  }
};

ProviderEditView.propTypes = {
  loading: PropTypes.bool.isRequired,
  provider: PropTypes.object,
  addProvider: PropTypes.func.isRequired,
  editProvider: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  subscribeToMore: PropTypes.func.isRequired
};

export default ProviderEditView;
