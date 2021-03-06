import React from "react";
import { Grid, Row } from "react-bootstrap";
import isEmpty from 'lodash/isEmpty';
import socketIOClient from 'socket.io-client';
import "../../../stylesheets/main.scss";
import NavBar from '../../../nav';

const socket = socketIOClient('http://localhost:5000');

const App = props => {
  if (!navigator.onLine) props.setConfigsIsOffline(true);

  if (!props.codeDone) {
    socket.on('npm_log', log => {
      props.setAppCode((props.code + '\n\n' + log));
    });

    socket.on('npm_done', () => {
      props.setAppCodeDone(true);
    });
  }

  if (isEmpty(props.components)) {
    props.initApp();
    props.initProject();
  }

  return (
    <Grid>
      <Row className="show-grid">
        <NavBar {...props} />
      </Row>
      <div className="mainContainer">
        <Row className="show-grid">
          {props.children}
        </Row>
      </div>
      <Row className="show-grid">
        <div className='footer'>
          <a href="#" className="support">&nbsp;</a>
          <a href="#" className="tweet">&nbsp;</a>
          <a href="#" className="face">&nbsp;</a>
        </div>
      </Row>
    </Grid>
  )
};

export default App;