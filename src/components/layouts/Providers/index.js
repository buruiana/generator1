import React, { Component } from 'react';
import { connect } from "react-redux";
import ProvidersListView from './providersListView';
import { getAllProviders } from '../../../services/providersService/actions';

class Providers extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  componentWillMount() {
    this.props.getAllProviders();
  }

  render() {
    return <ProvidersListView {...this.props} />;
  }
}
const mapStateToProps = state => {
  return {
    providers: state.providersServiceReducer.providers,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAllProviders: () => dispatch(getAllProviders()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Providers);