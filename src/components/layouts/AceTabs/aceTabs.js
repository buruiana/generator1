import React from 'react';
import Tabs from 'react-bootstrap/lib/Tabs';
import Tab from 'react-bootstrap/lib/Tab'
import Col from 'react-bootstrap/lib/Col';
import ExportFilesView from '../ExportFiles';

const AceTabs = props => {
  const onSelect = data => {
    props.setAceTab(data);
  };

  const renderTabs = () => {
    return props.aceTabs.map(tab => {
      const tabName = `${tab}.js`;
      return <Tab eventKey={tab} title={tabName} key={tab} />;
    });
  };

  return (
    <div className='flex'>
      <Col md={0}><ExportFilesView /></Col>
      <Col md={12}>
        <Tabs defaultActiveKey='index'
          id="uncontrolled-tab-example"
          onSelect={onSelect}
          activeKey={props.aceTab}>
          {renderTabs()}
        </Tabs>
      </Col>
    </div>
  );
}

export default AceTabs;