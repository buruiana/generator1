import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import { PageLayout, Table, Button } from '../../common/components/web';
import settings from '../../../../../../settings';

export default class ComponentList extends React.PureComponent {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    components: PropTypes.object,
    deleteComponent: PropTypes.func.isRequired,
    loadMoreRows: PropTypes.func.isRequired
  };

  handleDeleteComponent = id => {
    const { deleteComponent } = this.props;
    deleteComponent(id);
  };

  renderLoadMore = (components, loadMoreRows) => {
    if (components.pageInfo.hasNextPage) {
      return (
        <Button id="load-more" color="primary" onClick={loadMoreRows}>
          Load more ...
        </Button>
      );
    }
  };

  renderMetaData = () => (
    <Helmet
      title={`${settings.app.name} - Components list`}
      meta={[
        {
          name: 'description',
          content: `${settings.app.name} - List of allComponents example page`
        }
      ]}
    />
  );

  render() {
    const { loading, components, loadMoreRows } = this.props;
    if (loading) {
      return (
        <PageLayout>
          {this.renderMetaData()}
          <div className="text-center">Loading...</div>
        </PageLayout>
      );
    } else {
      const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          render: (text, record) => (
            <Link className="component-link" to={`/component/${record.id}`}>
              {text}
            </Link>
          )
        },
        {
          title: 'Provider',
          dataIndex: 'providerName',
          key: 'providerName'
        },
        {
          title: 'Actions',
          key: 'actions',
          width: 50,
          render: (text, record) => (
            <Button
              color="primary"
              size="sm"
              className="delete-button"
              onClick={() => this.handleDeleteComponent(record.id)}
            >
              Delete
            </Button>
          )
        }
      ];
      return (
        <PageLayout>
          {this.renderMetaData()}
          <h2>Components</h2>
          <Link to="/component/0">
            <Button color="primary">Add</Button>
          </Link>
          <h1 />
          <Table dataSource={components.edges.map(({ node }) => node)} columns={columns} />
          <div>
            <small>
              ({components.edges.length} / {components.totalCount})
            </small>
          </div>
          {this.renderLoadMore(components, loadMoreRows)}
        </PageLayout>
      );
    }
  }
}
