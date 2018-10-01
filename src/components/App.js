import React from "react";
import { Grid, Row } from "react-bootstrap";
import "../stylesheets/main.scss";
import NavBar from '../nav';

export default class App extends React.Component {
  render() {
    return (
      <Grid>
        <Row className="show-grid">
          <NavBar {...this.props}/>
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
