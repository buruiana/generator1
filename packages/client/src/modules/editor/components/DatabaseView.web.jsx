import React from 'react';
import Helmet from 'react-helmet';
import { Button, ButtonGroup } from 'reactstrap';
import { PageLayout } from '../../common/components/web';
import AceView from './AceView.web';
import SortableTreeView from './SortableTreeView';

const renderMetaData = () => (
  <Helmet
    title="Editor"
    meta={[
      {
        name: 'description',
        content: 'Database page'
      }
    ]}
  />
);

const renderButtons = () => (
  <ButtonGroup>
    <Button onClick="" id="actionTypes">
      Reducer
    </Button>
    <Button onClick="" id="actionTypes">
      Component
    </Button>
    <Button onClick="" id="actionTypes">
      Container
    </Button>
  </ButtonGroup>
);

const DatabaseView = props => {
  return (
    <PageLayout>
      {renderMetaData()}
      <div className="row">{renderButtons()}</div>
      <div className="row">
        <div className="mt-4 mb-4 col-lg-8">
          <SortableTreeView {...props} />
        </div>
        <div className="mt-4 mb-4 col-lg-4">
          <AceView refAce={instance => (this.ace = instance)} />
        </div>
      </div>
    </PageLayout>
  );
};

export default DatabaseView;
