import React from "react";
import { Grid, Col, Row } from "react-bootstrap";
import ComponentsList from '../ReactComponents';
import NavBarInstance from '../NavBar/NavBarInstance';
import Ace from '../AceEditor/Ace';

export default class Home extends React.Component {
  render() {
    return (
      <Grid>
        <Row className="show-grid">
          <NavBarInstance />
        </Row>
        <Row className="show-grid">
          <Col sm={12} md={8} >
            <ComponentsList />
          </Col>
          <Col sm={6} md={4} >
            <Ace />
          </Col>
        </Row>
      </Grid>
    );
  }
}
