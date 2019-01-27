import React from 'react';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import isEmpty from 'lodash/isEmpty';
import {
  COMPONENT,
  SERVICE,
  ACE_TABS,
} from '../../../utils/constants';

const ExportFilesView = props => {

  const renderLinks = () => {
    const isDisabled = isEmpty(props.projectSettings.projectDestination)
      ? `disabled='disabled'`
      : '';
    return (
      <span>
        <a className='exportFilesLinks' onClick={onClick}>All Files&nbsp;</a>
        {props.aceTabs.map(tab => <a className='exportFilesLinks' id={tab} isDisabled onClick={onClick}>{`${tab}.js`}&nbsp;</a>)}
      </span>);
  };

  const prepareObject = tab => {
    const objToSend = {};
    const exportAll = isEmpty(tab);
    objToSend.name = props.projectSettings.projectName;
    objToSend.destination = props.projectSettings.projectDestination;
    objToSend.projectType = props.projectSettings.projectType;
    objToSend.exportAll = exportAll;
    if (exportAll) {
      if (props.projectSettings.projectType === COMPONENT) {
        objToSend.component = props.code.dumb || props.code.smart;
        objToSend.hoc = props.code.hoc || '';
        objToSend.styles = props.code.styles || '';
      } else if (props.projectSettings.projectType === SERVICE) {
        objToSend.reducer = props.code.reducer;
        objToSend.actions = props.code.actions;
        objToSend.actionTypes = props.code.actionTypez;
        objToSend.saga = props.code.saga;
      }
      return objToSend;
    } else {
      if (props.projectSettings.projectType === COMPONENT) {
        switch (tab) {
          case ACE_TABS.INDEX:
            objToSend.hoc = props.code.hoc;
            return objToSend;
          case ACE_TABS.STYLES:
            objToSend.hoc = props.code.styles;
            return objToSend;
          case props.projectSettings.projectName:
            objToSend.component = props.code.dumb || props.code.smart;
            return objToSend;
          default:
            return objToSend;
        }
      } else {
        switch (tab) {
          case ACE_TABS.ACTIONS:
            objToSend.actions = props.code.actions;
            return objToSend;
          case ACE_TABS.ACTION_TYPES:
            objToSend.actionTypes = props.code.actionTypez;
            return objToSend;
          case ACE_TABS.SAGA:
            objToSend.saga = props.code.saga;
            return objToSend;
          case ACE_TABS.REDUCER:
            objToSend.reducer = props.code.reducer;
            return objToSend;
          default:
            return null;
        }
      }
    }
  }

  const onClick = event => {
    const objToSend = prepareObject(event.target.id);
    props.exportProjectFiles(objToSend);
  };

  const renderView = () => {
    return !props.projectSettings.projectDestination
      ? <span className='emptyExport'>SET DESTINATION</span>
      : renderLinks();
  };

  return renderView();
}

export default ExportFilesView;