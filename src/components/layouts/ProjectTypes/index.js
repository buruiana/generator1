import React, { Component } from 'react';
import { connect } from "react-redux";
import ProjectTypesListView from './projectTypesListView';
import {
  getAllProjectTypes,
  deleteProjectType,
  setSelectedProjectType,
} from '../../../services/projectTypesService/actions';

class ProjectTypes extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  componentWillMount() {
    this.props.getAllProjectTypes();
  }

  render() {
    return <ProjectTypesListView {...this.props} />;
  }
}
const mapStateToProps = state => {
  return {
    projectTypes: state.projectTypesServiceReducer.projectTypes,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAllProjectTypes: () => dispatch(getAllProjectTypes()),
    deleteProjectType: () => dispatch(deleteProjectType()),
    setSelectedProjectType: projectType => dispatch(setSelectedProjectType(projectType)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectTypes);