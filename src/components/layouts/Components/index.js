import React, { Component } from 'react';
import { connect } from "react-redux";
import ComponentsListView from './componentsListView';
import {
  getAllComponents,
  deleteComponent,
  setSelectedComponent,
} from '../../../services/componentsService/actions';
import {
  getAllProviders,
} from '../../../services/providersService/actions';

class Components extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  componentWillMount() {
    this.props.getAllComponents();
    this.props.getAllProviders();
  }

  render() {
    return <ComponentsListView {...this.props} />;
  }
}
const mapStateToProps = state => {
  return {
    components: state.componentsServiceReducer.components,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAllProviders: () => dispatch(getAllProviders()),
    getAllComponents: () => dispatch(getAllComponents()),
    deleteComponent: () => dispatch(deleteComponent()),
    setSelectedComponent: component => dispatch(setSelectedComponent(component)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Components);