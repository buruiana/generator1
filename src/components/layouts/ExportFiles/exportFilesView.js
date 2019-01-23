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

  // const getCode = tab => {
  //   if (tab === props.projectSettings.projectName && props.projectSettings.projectType === COMPONENT && props.projectSettings.componentType === SMART) {
  //     return props.code.smart || '';
  //   } else if (tab === props.projectSettings.projectName && props.projectSettings.projectType === COMPONENT && props.projectSettings.componentType === DUMB) {
  //     return props.code.dumb || '';
  //   } else if (tab === ACE_TABS.INDEX) {
  //     return props.code.hoc || '';
  //   } else if (tab === STYLES && props.projectSettings.projectType === COMPONENT) {
  //     return props.code.styles || '';
  //   } else if (tab === ACE_TABS.ACTIONS) {
  //     return props.code.actions;
  //   } else if (tab === ACE_TABS.ACTION_TYPES) {
  //     return props.code.actionTypes;
  //   } else if (tab === ACE_TABS.REDUCER) {
  //     return props.code.reducer;
  //   }
  // };

  // const renderLinks = () => {

  //   return props.aceTabs.map(tab => {
  //     return <a href={`data:text/plain;UTF-8,${getCode(tab)}`} download={`${tab}.js`} key={tab}>{`${tab}.js`} </a>;
  //   });
  // };

  const renderExportFiles = () => {
    return props.projectSettings.projectName
      ? renderLinks()
      : null;
  };

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

  return (
    <div>
      <Button onClick={onClick} bsStyle="info">Download</Button>
    </div>
  );
}

export default ExportFilesView;