import React from 'react';
import PropTypes from 'prop-types';
import { graphql, compose } from 'react-apollo';
import update from 'immutability-helper';

import ProviderList from '../components/ProviderList';

import PROVIDERS_QUERY from '../graphql/ProvidersQuery.graphql';
import PROVIDERS_SUBSCRIPTION from '../graphql/ProvidersSubscription.graphql';
import DELETE_PROVIDER from '../graphql/DeleteProvider.graphql';

export function AddProvider(prev, node) {
  // ignore if duplicate
  if (node.id !== null && prev.providers.edges.some(provider => node.id === provider.cursor)) {
    return prev;
  }

  const edge = {
    cursor: node.id,
    node: node,
    __typename: 'ProviderEdges'
  };

  return update(prev, {
    providers: {
      totalCount: {
        $set: prev.providers.totalCount + 1
      },
      edges: {
        $unshift: [edge]
      }
    }
  });
}

function DeleteProvider(prev, id) {
  const index = prev.providers.edges.findIndex(x => x.node.id === id);

  // ignore if not found
  if (index < 0) {
    return prev;
  }

  return update(prev, {
    providers: {
      totalCount: {
        $set: prev.providers.totalCount - 1
      },
      edges: {
        $splice: [[index, 1]]
      }
    }
  });
}

class Provider extends React.Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    providers: PropTypes.object,
    subscribeToMore: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.subscription = null;
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.loading) {
      const endCursor = this.props.providers ? this.props.providers.pageInfo.endCursor : 0;
      const nextEndCursor = nextProps.providers.pageInfo.endCursor;

      // Check if props have changed and, if necessary, stop the subscription
      if (this.subscription && endCursor !== nextEndCursor) {
        this.subscription();
        this.subscription = null;
      }

      // Subscribe or re-subscribe
      if (!this.subscription) {
        this.subscribeToProviderList(nextEndCursor);
      }
    }
  }

  componentWillUnmount() {
    if (this.subscription) {
      // unsubscribe
      this.subscription();
    }
  }

  subscribeToProviderList = endCursor => {
    const { subscribeToMore } = this.props;

    this.subscription = subscribeToMore({
      document: PROVIDERS_SUBSCRIPTION,
      variables: { endCursor },
      updateQuery: (prev, { subscriptionData: { data: { providersUpdated: { mutation, node } } } }) => {
        let newResult = prev;

        if (mutation === 'CREATED') {
          newResult = AddProvider(prev, node);
        } else if (mutation === 'DELETED') {
          newResult = DeleteProvider(prev, node.id);
        }

        return newResult;
      }
    });
  };

  render() {
    return <ProviderList {...this.props} />;
  }
}

export default compose(
  graphql(PROVIDERS_QUERY, {
    options: () => {
      return {
        variables: { limit: 10, after: 0 }
      };
    },
    props: ({ data }) => {
      const { loading, error, providers, fetchMore, subscribeToMore } = data;
      const loadMoreRows = () => {
        return fetchMore({
          variables: {
            after: providers.pageInfo.endCursor
          },
          updateQuery: (previousResult, { fetchMoreResult }) => {
            const totalCount = fetchMoreResult.providers.totalCount;
            const newEdges = fetchMoreResult.providers.edges;
            const pageInfo = fetchMoreResult.providers.pageInfo;

            return {
              // By returning `cursor` here, we update the `fetchMore` function
              // to the new cursor.
              providers: {
                totalCount,
                edges: [...previousResult.providers.edges, ...newEdges],
                pageInfo,
                __typename: 'Providers'
              }
            };
          }
        });
      };
      if (error) throw new Error(error);
      return { loading, providers, subscribeToMore, loadMoreRows };
    }
  }),
  graphql(DELETE_PROVIDER, {
    props: ({ mutate }) => ({
      deleteProvider: id => {
        mutate({
          variables: { id },
          optimisticResponse: {
            __typename: 'Mutation',
            deleteProvider: {
              id: id,
              __typename: 'Provider'
            }
          },
          updateQueries: {
            providers: (prev, { mutationResult: { data: { deleteProvider } } }) => {
              return DeleteProvider(prev, deleteProvider.id);
            }
          }
        });
      }
    })
  })
)(Provider);
