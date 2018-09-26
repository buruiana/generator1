import React, { Component } from 'react';
import { connect } from "react-redux";
import NavBar from './navBar';

const mapStateToProps = state => {
  return {
    configs: state.configsServiceReducer.configs,
  }
}

export default connect(mapStateToProps)(NavBar);