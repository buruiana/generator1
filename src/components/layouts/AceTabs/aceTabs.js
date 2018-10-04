import React from 'react';
import Tabs from 'react-bootstrap/lib/Tabs';
import Tab from 'react-bootstrap/lib/Tab'

const AceTabs = props => {
  const onSelect = data => {
    console.log('console: datadata', data);
    props.setAceTab(data);
  };
  return (
    <div className='aceTabs'>
      <Tabs defaultActiveKey='index' id="uncontrolled-tab-example" onSelect={onSelect}>
        <Tab eventKey='index' title="index.js" />
        <Tab eventKey='actions' title="actions.js" />
        <Tab eventKey='actionTypes' title="actionTypes.js" />
        <Tab eventKey='reducer' title="reducer.js" />
      </Tabs>
    </div>
  );
}

export default AceTabs;