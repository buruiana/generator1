import React from 'react';
import Tabs from 'react-bootstrap/lib/Tabs';
import Tab from 'react-bootstrap/lib/Tab'
import Col from 'react-bootstrap/lib/Col';

import { 
  COMPONENT,
  REACT,
  STYLES,
} from '../../../utils/constants';

const AceTabs = props => {
  const onSelect = data => {
    props.setAceTab(data);
  };

  const isReactComponent = props.projectSettings.projectType === COMPONENT && props.projectSettings.projectTechno === REACT;

  const getFileExt = tab => {
    return (isReactComponent && tab === STYLES)
      ? 'css'
      : 'js'
  };

  const renderTabs = () => {
    return props.aceTabs.map(tab => {
      const tabName = `${tab}.${getFileExt(tab)}`;
      return <Tab eventKey={tab} title={tabName} key={tab} />;
    });
  };

  return (
    <div className='tabsList'>
      <Tabs defaultActiveKey='index'
        id="uncontrolled-tab-example"
        onSelect={onSelect}
        activeKey={props.aceTab}>
        {renderTabs()}
      </Tabs>
    </div>
  );
}

export default AceTabs;