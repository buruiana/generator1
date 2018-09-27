import React, { Component } from 'react';
import { connect } from "react-redux";
import ComponentsListView from './componentsListView';
import {
  getAllComponents,
  deleteComponent,
  setSelectedComponent,
} from '../../../services/componentsService/actions';

class Components extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  componentWillMount() {
    this.props.getAllComponents();
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
    getAllComponents: () => dispatch(getAllComponents()),
    deleteComponent: () => dispatch(deleteComponent()),
    setSelectedComponent: component => dispatch(setSelectedComponent(component)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Components);