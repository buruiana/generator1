import React from 'react';
import PropTypes from 'prop-types';
import { graphql, compose } from 'react-apollo';

import ProviderEditView from '../components/ProviderEditView';
import { AddProvider } from './Provider';

import PROVIDER_QUERY from '../graphql/ProviderQuery.graphql';
import ADD_PROVIDER from '../graphql/AddProvider.graphql';
import EDIT_PROVIDER from '../graphql/EditProvider.graphql';
import PROVIDER_SUBSCRIPTION from '../graphql/ProviderSubscription.graphql';

class ProviderEdit extends React.Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    provider: PropTypes.object,
    subscribeToMore: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.subscription = null;
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.loading) {
      // Check if props have changed and, if necessary, stop the subscription
      if (this.subscription && this.props.provider.id !== nextProps.provider.id) {
        this.subscription();
        this.subscription = null;
      }

      // Subscribe or re-subscribe
      if (!this.subscription && nextProps.provider) {
        this.subscribeToProviderEdit(nextProps.provider.id);
      }
    }
  }

  componentWillUnmount() {
    if (this.subscription) {
      // unsubscribe
      this.subscription();
    }
  }

  subscribeToProviderEdit = providerId => {
    const { subscribeToMore } = this.props;

    this.subscription = subscribeToMore({
      document: PROVIDER_SUBSCRIPTION,
      variables: { id: providerId }
    });
  };

  render() {
    return <ProviderEditView {...this.props} />;
  }
}

export default compose(
  graphql(PROVIDER_QUERY, {
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
    props({ data: { loading, error, provider, subscribeToMore } }) {
      if (error) throw new Error(error);
      return { loading, provider, subscribeToMore };
    }
  }),
  graphql(ADD_PROVIDER, {
    props: ({ ownProps: { history, navigation }, mutate }) => ({
      addProvider: async (name, path) => {
        let providerData = await mutate({
          variables: { input: { name, path } },
          optimisticResponse: {
            __typename: 'Mutation',
            addProvider: {
              __typename: 'Provider',
              id: null,
              name: name,
              path: path
            }
          },
          updateQueries: {
            providers: (prev, { mutationResult: { data: { addProvider } } }) => {
              return AddProvider(prev, addProvider);
            }
          }
        });

        if (history) {
          return history.push('/provider/' + providerData.data.addProvider.id, {
            provider: providerData.data.addProvider
          });
        } else if (navigation) {
          return navigation.setParams({
            id: providerData.data.addProvider.id,
            provider: providerData.data.addProvider
          });
        }
      }
    })
  }),
  graphql(EDIT_PROVIDER, {
    props: ({ ownProps: { history, navigation }, mutate }) => ({
      editProvider: async (id, name, path) => {
        await mutate({
          variables: { input: { id, name, path } }
        });

        if (history) {
          return history.push('/providers');
        }
        if (navigation) {
          return navigation.goBack();
        }
      }
    })
  })
)(ProviderEdit);
