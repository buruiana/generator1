import React from "react";
import { Grid, Col, Row } from "react-bootstrap";
import Editor from '../../layouts/Editor';
import NavBarInstance from '../../../nav/NavBarInstance';
import Ace from '../../AceEditor/Ace';

const Home = props => {
  return (
    <Grid>
      <Row className="show-grid">
        <NavBarInstance />
      </Row>
      <Row className="show-grid">
        <Col sm={12} md={8} >
          <Editor />
        </Col>
        <Col sm={6} md={4} >
          <Ace />
        </Col>
      </Row>
    </Grid>
  );
};

export default Home;