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
      console.log('console: log-----------------', log);
      props.setAppCode((props.code + '\n\n' + log));
    });

    socket.on('npm_done', () => {
      console.log('console: log done------------');
      props.setAppCodeDone(true);
    });
  }

  if (isEmpty(props.components)) props.initApp();
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
    </Grid>
  )
};

export default App;