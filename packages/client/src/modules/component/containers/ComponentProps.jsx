import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { graphql, compose } from 'react-apollo';
import update from 'immutability-helper';
import { reset } from 'redux-form';

import ComponentPropsView from '../components/ComponentPropsView';

import ADD_PROP from '../graphql/AddProp.graphql';
import EDIT_PROP from '../graphql/EditProp.graphql';
import DELETE_PROP from '../graphql/DeleteProp.graphql';
import PROP_SUBSCRIPTION from '../graphql/PropSubscription.graphql';

function AddProp(prev, node) {
  // ignore if duplicate
  if (node.id !== null && prev.component.props.some(prop => node.id === prop.id)) {
    return prev;
  }

  return update(prev, {
    component: {
      props: {
        $push: [node]
      }
    }
  });
}

function DeleteProp(prev, id) {
  const index = prev.component.props.findIndex(x => x.id === id);

  // ignore if not found
  if (index < 0) {
    return prev;
  }

  return update(prev, {
    component: {
      props: {
        $splice: [[index, 1]]
      }
    }
  });
}

class ComponentProps extends React.Component {
  static propTypes = {
    componentId: PropTypes.number.isRequired,
    props: PropTypes.array.isRequired,
    prop: PropTypes.object.isRequired,
    onPropSelect: PropTypes.func.isRequired,
    subscribeToMore: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.subscription = null;
  }

  componentWillReceiveProps(nextProps) {
    // Check if props have changed and, if necessary, stop the subscription
    if (this.subscription && this.props.componentId !== nextProps.componentId) {
      this.subscription = null;
    }

    // Subscribe or re-subscribe
    if (!this.subscription) {
      this.subscribeToPropList(nextProps.componentId);
    }
  }

  componentWillUnmount() {
    this.props.onPropSelect({ id: null, name: '', description: '', type: '' });

    if (this.subscription) {
      // unsubscribe
      this.subscription();
    }
  }

  subscribeToPropList = componentId => {
    const { subscribeToMore } = this.props;

    this.subscription = subscribeToMore({
      document: PROP_SUBSCRIPTION,
      variables: { componentId },
      updateQuery: (prev, { subscriptionData: { data: { propUpdated: { mutation, id, node } } } }) => {
        let newResult = prev;

        if (mutation === 'CREATED') {
          newResult = AddProp(prev, node);
        } else if (mutation === 'DELETED') {
          newResult = DeleteProp(prev, id);
        }

        return newResult;
      }
    });
  };

  render() {
    return <ComponentPropsView {...this.props} />;
  }
}

const ComponentPropsWithApollo = compose(
  graphql(ADD_PROP, {
    props: ({ mutate }) => ({
      addProp: (name, description, type, componentId) =>
        mutate({
          variables: { input: { name, description, type, componentId } },
          optimisticResponse: {
            __typename: 'Mutation',
            addProp: {
              __typename: 'Prop',
              id: null,
              name: name,
              description: description,
              type: type
            }
          }
          //,
          // updateQueries: {
          //   component: (prev, { mutationResult: { data: { addProp } } }) => {
          //     if (prev.component) {
          //       return AddProp(prev, addProp);
          //     }
          //   }
          // }
        })
    })
  }),
  graphql(EDIT_PROP, {
    props: ({ ownProps: { componentId }, mutate }) => ({
      editProp: (id, name, description, type) =>
        mutate({
          variables: { input: { id, componentId, name, description, type } },
          optimisticResponse: {
            __typename: 'Mutation',
            editProp: {
              __typename: 'Prop',
              id: id,
              name: name,
              description: description,
              type: type
            }
          }
        })
    })
  }),
  graphql(DELETE_PROP, {
    props: ({ ownProps: { componentId }, mutate }) => ({
      deleteProp: id =>
        mutate({
          variables: { input: { id, componentId } },
          optimisticResponse: {
            __typename: 'Mutation',
            deleteProp: {
              __typename: 'Prop',
              id: id
            }
          },
          updateQueries: {
            component: (prev, { mutationResult: { data: { deleteProp } } }) => {
              if (prev.component) {
                return DeleteProp(prev, deleteProp.id);
              }
            }
          }
        })
    })
  })
)(ComponentProps);

export default connect(
  state => ({ prop: state.component.prop }),
  dispatch => ({
    onPropSelect(prop) {
      dispatch({
        type: 'PROP_SELECT',
        value: prop
      });
    },
    onFormSubmitted() {
      dispatch(reset('prop'));
    }
  })
)(ComponentPropsWithApollo);
