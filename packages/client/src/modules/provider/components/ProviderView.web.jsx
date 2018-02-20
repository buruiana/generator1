import React from 'react';
import Helmet from 'react-helmet';
import { PageLayout } from '../../common/components/web';

const renderMetaData = () => (
  <Helmet
    title="Provider"
    meta={[
      {
        name: 'description',
        content: 'Provider page'
      }
    ]}
  />
);

const ProviderView = () => {
  return (
    <PageLayout>
      {renderMetaData()}
      <div className="text-center mt-4 mb-4">
        <p>Hello Provider!</p>
      </div>
    </PageLayout>
  );
};

export default ProviderView;
