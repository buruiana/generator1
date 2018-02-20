import React from 'react';
import PropTypes from 'prop-types';
import { graphql, compose } from 'react-apollo';

import ComponentEditView from '../components/ComponentEditView';
import { AddComponent } from './Component';

import COMPONENT_QUERY from '../graphql/ComponentQuery.graphql';
import ADD_COMPONENT from '../graphql/AddComponent.graphql';
import EDIT_COMPONENT from '../graphql/EditComponent.graphql';
import COMPONENT_SUBSCRIPTION from '../graphql/ComponentSubscription.graphql';
import PROVIDERS_QUERY from '../../provider/graphql/ProvidersQuery.graphql';

class ComponentEdit extends React.Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    component: PropTypes.object,
    subscribeToMore: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.subscription = null;
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.loading) {
      // Check if props have changed and, if necessary, stop the subscription
      if (this.subscription && this.props.component.id !== nextProps.component.id) {
        this.subscription();
        this.subscription = null;
      }

      // Subscribe or re-subscribe
      if (!this.subscription && nextProps.component) {
        this.subscribeToComponentEdit(nextProps.component.id);
      }
    }
  }

  componentWillUnmount() {
    if (this.subscription) {
      // unsubscribe
      this.subscription();
    }
  }

  subscribeToComponentEdit = componentId => {
    const { subscribeToMore } = this.props;

    this.subscription = subscribeToMore({
      document: COMPONENT_SUBSCRIPTION,
      variables: { id: componentId }
    });
  };

  render() {
    return <ComponentEditView {...this.props} />;
  }
}

export default compose(
  graphql(COMPONENT_QUERY, {
    options: props => {
      let id = 0;
      if (props.match) {
        id = props.match.params.id;
      } else if (props.navigation) {
        id = props.navigation.state.params.id;
      }

      return {
        variables: { id }
      };
    },
    props({ data: { loading, error, component, subscribeToMore } }) {
      if (error) throw new Error(error);
      return { loading, component, subscribeToMore };
    }
  }),
  graphql(PROVIDERS_QUERY, {
    options: () => {
      return {
        variables: { limit: 10, after: 0 }
      };
    },
    props: ({ data }) => {
      const { loading, error, providers, fetchMore } = data;
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
      return { loading, providers, loadMoreRows };
    }
  }),
  graphql(ADD_COMPONENT, {
    props: ({ ownProps: { history, navigation }, mutate }) => ({
      addComponent: async (name, description, technology, provider) => {
        let componentData = await mutate({
          variables: { input: { name, description, technology, provider } },
          optimisticResponse: {
            __typename: 'Mutation',
            addComponent: {
              __typename: 'Component',
              id: null,
              name: name,
              description: description,
              technology: technology,
              provider: provider,
              props: []
            }
          },
          updateQueries: {
            components: (prev, { mutationResult: { data: { addComponent } } }) => {
              return AddComponent(prev, addComponent);
            }
          }
        });

        if (history) {
          return history.push('/component/' + componentData.data.addComponent.id, {
            component: componentData.data.addComponent
          });
        } else if (navigation) {
          return navigation.setParams({
            id: componentData.data.addComponent.id,
            component: componentData.data.addComponent
          });
        }
      }
    })
  }),
  graphql(EDIT_COMPONENT, {
    props: ({ ownProps: { history, navigation }, mutate }) => ({
      editComponent: async (id, name, description, technology, provider) => {
        await mutate({
          variables: { input: { id, name, description, technology, provider } }
        });

        if (history) {
          return history.push('/components');
        }
        if (navigation) {
          return navigation.goBack();
        }
      }
    })
  })
)(ComponentEdit);
