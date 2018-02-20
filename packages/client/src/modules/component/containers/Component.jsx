import React from 'react';
import PropTypes from 'prop-types';
import { graphql, compose } from 'react-apollo';
import update from 'immutability-helper';

import ComponentList from '../components/ComponentList';

import COMPONENTS_QUERY from '../graphql/ComponentsQuery.graphql';
import COMPONENTS_SUBSCRIPTION from '../graphql/ComponentsSubscription.graphql';
import DELETE_COMPONENT from '../graphql/DeleteComponent.graphql';

export function AddComponent(prev, node) {
  // ignore if duplicate
  if (node.id !== null && prev.components.edges.some(component => node.id === component.cursor)) {
    return prev;
  }

  const edge = {
    cursor: node.id,
    node: node,
    __typename: 'ComponentEdges'
  };

  return update(prev, {
    components: {
      totalCount: {
        $set: prev.components.totalCount + 1
      },
      edges: {
        $unshift: [edge]
      }
    }
  });
}

function DeleteComponent(prev, id) {
  const index = prev.components.edges.findIndex(x => x.node.id === id);

  // ignore if not found
  if (index < 0) {
    return prev;
  }

  return update(prev, {
    components: {
      totalCount: {
        $set: prev.components.totalCount - 1
      },
      edges: {
        $splice: [[index, 1]]
      }
    }
  });
}

class Component extends React.Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    components: PropTypes.object,
    subscribeToMore: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.subscription = null;
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.loading) {
      const endCursor = this.props.components ? this.props.components.pageInfo.endCursor : 0;
      const nextEndCursor = nextProps.components.pageInfo.endCursor;

      // Check if props have changed and, if necessary, stop the subscription
      if (this.subscription && endCursor !== nextEndCursor) {
        this.subscription();
        this.subscription = null;
      }

      // Subscribe or re-subscribe
      if (!this.subscription) {
        this.subscribeToComponentList(nextEndCursor);
      }
    }
  }

  componentWillUnmount() {
    if (this.subscription) {
      // unsubscribe
      this.subscription();
    }
  }

  subscribeToComponentList = endCursor => {
    const { subscribeToMore } = this.props;

    this.subscription = subscribeToMore({
      document: COMPONENTS_SUBSCRIPTION,
      variables: { endCursor },
      updateQuery: (prev, { subscriptionData: { data: { componentsUpdated: { mutation, node } } } }) => {
        let newResult = prev;

        if (mutation === 'CREATED') {
          newResult = AddComponent(prev, node);
        } else if (mutation === 'DELETED') {
          newResult = DeleteComponent(prev, node.id);
        }

        return newResult;
      }
    });
  };

  render() {
    return <ComponentList {...this.props} />;
  }
}

export default compose(
  graphql(COMPONENTS_QUERY, {
    options: () => {
      return {
        variables: { limit: 100, after: 0 }
      };
    },
    props: ({ data }) => {
      const { loading, error, components, fetchMore, subscribeToMore } = data;
      const loadMoreRows = () => {
        return fetchMore({
          variables: {
            after: components.pageInfo.endCursor
          },
          updateQuery: (previousResult, { fetchMoreResult }) => {
            const totalCount = fetchMoreResult.components.totalCount;
            const newEdges = fetchMoreResult.components.edges;
            const pageInfo = fetchMoreResult.components.pageInfo;

            return {
              // By returning `cursor` here, we update the `fetchMore` function
              // to the new cursor.
              components: {
                totalCount,
                edges: [...previousResult.components.edges, ...newEdges],
                pageInfo,
                __typename: 'Components'
              }
            };
          }
        });
      };
      if (error) throw new Error(error);
      return { loading, components, subscribeToMore, loadMoreRows };
    }
  }),
  graphql(DELETE_COMPONENT, {
    props: ({ mutate }) => ({
      deleteComponent: id => {
        mutate({
          variables: { id },
          optimisticResponse: {
            __typename: 'Mutation',
            deleteComponent: {
              id: id,
              __typename: 'Component'
            }
          },
          updateQueries: {
            components: (prev, { mutationResult: { data: { deleteComponent } } }) => {
              return DeleteComponent(prev, deleteComponent.id);
            }
          }
        });
      }
    })
  })
)(Component);
