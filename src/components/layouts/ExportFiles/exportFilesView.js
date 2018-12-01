import React from 'react';
import Well from 'react-bootstrap/lib/Well';
import Label from 'react-bootstrap/lib/Label';
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
    } else if (tab === ACE_TABS.INDEX && props.projectSettings.projectType === COMPONENT) {
      return props.code.hoc || '';
    } else if (tab === STYLES && props.projectSettings.projectType === COMPONENT) {
      return props.code.styles || '';
    } else {
      return 'a';
    }
  };

  const renderLinks = () => {

    return props.aceTabs.map(tab => {
      return <a href={`data:text/plain;UTF-8,${getCode(tab)}`} download={`${tab}.js`} key={tab}>{`${tab}.js`}      </a>;
    });
  };

  const renderExportFiles = () => {
    return props.projectSettings.projectName
      ? renderLinks()
      : null;
  };

  return (
    <Well>
      {renderExportFiles()}
    </Well>
  );
}

export default ExportFilesView;