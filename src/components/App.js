import React from "react";
import { Grid, Col, Row } from "react-bootstrap";
import "../stylesheets/main.scss";
import NavBar from '../nav';

export default class App extends React.Component {
  render() {
    return (
      <Grid>
        <Row className="show-grid">
          <NavBar />
        </Row>
        <div className="mainContainer">
          <Row className="show-grid">
            {this.props.children}
          </Row>
        </div>
      </Grid>
    );
  }
}
