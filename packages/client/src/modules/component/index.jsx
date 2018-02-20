import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';

import { createTabBarIconWrapper } from '../common/components/native';

import Component from './containers/Component';
import ComponentEdit from './containers/ComponentEdit';

import reducers from './reducers';

import Feature from '../connector';

class ComponentListScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Component list',
    headerRight: <Button title="Add" onPress={() => navigation.navigate('ComponentEdit', { id: 0 })} />
  });
  render() {
    return <Component navigation={this.props.navigation} />;
  }
}

ComponentListScreen.propTypes = {
  navigation: PropTypes.object
};

class ComponentEditScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.id === 0 ? 'Create' : 'Edit'} component`
  });
  render() {
    return <ComponentEdit navigation={this.props.navigation} />;
  }
}

ComponentEditScreen.propTypes = {
  navigation: PropTypes.object
};

const ComponentNavigator = StackNavigator({
  ComponentList: { screen: ComponentListScreen },
  ComponentEdit: { screen: ComponentEditScreen }
});

export default new Feature({
  tabItem: {
    Component: {
      screen: ComponentNavigator,
      navigationOptions: {
        tabBarIcon: createTabBarIconWrapper(Ionicons, {
          name: 'ios-book-outline',
          size: 30
        })
      }
    }
  },
  reducer: { component: reducers }
});
