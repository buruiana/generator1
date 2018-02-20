import React from 'react';
import Helmet from 'react-helmet';
import { PageLayout } from '../../common/components/web';
import AceView from './AceView.web';
import SortableTreeTest from './SortableTreeTest';

const renderMetaData = () => (
  <Helmet
    title="Editor"
    meta={[
      {
        name: 'description',
        content: 'Editor page'
      }
    ]}
  />
);

const EditorView = props => {
  return (
    <PageLayout>
      {renderMetaData()}
      <div className="row">
        <div className="mt-4 mb-4 col-lg-8">
          <SortableTreeTest {...props} />
        </div>
        <div className="mt-4 mb-4 col-lg-4">
          <AceView refAce={instance => (this.ace = instance)} />
        </div>
      </div>
    </PageLayout>
  );
};

export default EditorView;
