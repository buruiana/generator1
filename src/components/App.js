import React from "react";
import { Grid, Col, Row } from "react-bootstrap";
import "../stylesheets/main.scss";
import NavBarInstance from '../nav/NavBarInstance';

export default class App extends React.Component {
  render() {
    return (
      <Grid>
        <Row className="show-grid">
          <NavBarInstance />
        </Row>
        <Row className="show-grid">
          {this.props.children}
        </Row>
      </Grid>
    );
  }
}
