import React, { Component } from 'react';
import { connect } from "react-redux";
import TechnosListView from './technosListView';
import { getAllTechnos } from '../../../services/technosService/actions';

class Technos extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  componentWillMount() {
    this.props.getAllTechnos();
  }

  render() {
    return <TechnosListView {...this.props} />;
  }
}
const mapStateToProps = state => {
  return {
    technos: state.technosServiceReducer.technos,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAllTechnos: () => dispatch(getAllTechnos()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Technos);