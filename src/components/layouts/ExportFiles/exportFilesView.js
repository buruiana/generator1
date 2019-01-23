import React from 'react';
import Well from 'react-bootstrap/lib/Well';
import Label from 'react-bootstrap/lib/Label';
import { Grid, Row, Col } from "react-bootstrap";
import {
  COMPONENT,
  SMART,
  DUMB,
  ACE_TABS,
  STYLES,
} from '../../../utils/constants';


const ExportFilesView = props => {

  const getCode = tab => {
    if (tab === props.projectSettings.projectName && props.projectSettings.projectType === COMPONENT && props.projectSettings.componentType === SMART) {
      return props.code.smart || '';
    } else if (tab === props.projectSettings.projectName && props.projectSettings.projectType === COMPONENT && props.projectSettings.componentType === DUMB) {
      return props.code.dumb || '';
    } else if (tab === ACE_TABS.INDEX) {
      return props.code.hoc || '';
    } else if (tab === STYLES && props.projectSettings.projectType === COMPONENT) {
      return props.code.styles || '';
    } else if (tab === ACE_TABS.ACTIONS) {
      return props.code.actions;
    } else if (tab === ACE_TABS.ACTION_TYPES) {
      return props.code.actionTypes;
    } else if (tab === ACE_TABS.REDUCER) {
      return props.code.reducer;
    }
  };

  const renderLinks = () => {

    return props.aceTabs.map(tab => {
      return <a href={`data:text/plain;UTF-8,${getCode(tab)}`} download={`${tab}.js`} key={tab}>{`${tab}.js`} </a>;
    });
  };

  const renderExportFiles = () => {
    return props.projectSettings.projectName
      ? renderLinks()
      : null;
  };

  const onClick = () => {
    console.log('console: downloading', );
  };

  return (
    <div className='paddingTop downloadFiles'>
      <button onClick={onClick}>Download files</button>
      {/* <Well>
        <Grid>
          <Row className="show-grid">
            <Col xs={2} md={2}>
              <Label>Download</Label>
            </Col>
            <Col xs={12} md={10}>
              <div className='exportFilesLinks'>{renderExportFiles()}</div>
            </Col>
          </Row>
        </Grid>
      </Well> */}
    </div>
  );
}

export default ExportFilesView;