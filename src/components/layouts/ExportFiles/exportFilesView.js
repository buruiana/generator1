import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import {
  COMPONENT,
  SMART,
  DUMB,
  ACE_TABS,
  STYLES,
  SERVICE,
} from '../../../utils/constants';

const ExportFilesView = props => {

  const prepareObject = () => {
    const objToSend = {};
    objToSend.name = props.projectSettings.projectName;
    objToSend.destination = props.projectSettings.projectDestination;
    if (props.projectSettings.projectType === COMPONENT) {
      objToSend.component = props.code.dumb || props.code.smart;
      objToSend.hoc = props.code.hoc;
      objToSend.styles = props.code.styles;
    } else if (props.projectSettings.projectType === SERVICE) {
      objToSend.reducer = props.code.reducer;
      objToSend.actions = props.code.actions;
      objToSend.actionTypes = props.code.actionTypez;
      objToSend.saga = props.code.saga;
    }
    return objToSend;
  }

  const onClick = () => {
    const objToSend = prepareObject();
    props.exportProjectFiles(objToSend);
  };

  const renderView = () => {
    return !props.projectSettings.projectDestination
      ? null
      : (
        <div>
          <Button onClick={onClick} bsStyle="info">Download</Button>
        </div>
      );
  };

  return renderView();
}

export default ExportFilesView;