import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import { PageLayout, Table, Button } from '../../common/components/web';
import settings from '../../../../../../settings';

export default class ProviderList extends React.PureComponent {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    providers: PropTypes.object,
    deleteProvider: PropTypes.func.isRequired,
    loadMoreRows: PropTypes.func.isRequired
  };

  handleDeleteProvider = id => {
    const { deleteProvider } = this.props;
    deleteProvider(id);
  };

  renderLoadMore = (providers, loadMoreRows) => {
    if (providers.pageInfo.hasNextPage) {
      return (
        <Button id="load-more" color="primary" onClick={loadMoreRows}>
          Load more ...
        </Button>
      );
    }
  };

  renderMetaData = () => (
    <Helmet
      title={`${settings.app.name} - Providers list`}
      meta={[
        {
          name: 'description',
          content: `${settings.app.name} - List of all providers example page`
        }
      ]}
    />
  );

  render() {
    const { loading, providers, loadMoreRows } = this.props;
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
          key: 'title',
          render: (text, record) => (
            <Link className="provider-link" to={`/provider/${record.id}`}>
              {text}
            </Link>
          )
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
              onClick={() => this.handleDeleteProvider(record.id)}
            >
              Delete
            </Button>
          )
        }
      ];
      return (
        <PageLayout>
          {this.renderMetaData()}
          <h2>Providers</h2>
          <Link to="/provider/0">
            <Button color="primary">Add</Button>
          </Link>
          <h1 />
          <Table dataSource={providers.edges.map(({ node }) => node)} columns={columns} />
          <div>
            <small>
              ({providers.edges.length} / {providers.totalCount})
            </small>
          </div>
          {this.renderLoadMore(providers, loadMoreRows)}
        </PageLayout>
      );
    }
  }
}
