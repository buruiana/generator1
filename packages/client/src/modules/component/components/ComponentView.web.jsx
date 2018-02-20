import React from 'react';
import Helmet from 'react-helmet';
import { PageLayout } from '../../common/components/web';

const renderMetaData = () => (
  <Helmet
    title="Component"
    meta={[
      {
        name: 'description',
        content: 'Component page'
      }
    ]}
  />
);

const ComponentView = () => {
  return (
    <PageLayout>
      {renderMetaData()}
      <div className="text-center mt-4 mb-4">
        <p>Hello Component!</p>
      </div>
    </PageLayout>
  );
};

export default ComponentView;
