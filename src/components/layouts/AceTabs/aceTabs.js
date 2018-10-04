import React from 'react';
import Tabs from 'react-bootstrap/lib/Tabs';
import Tab from 'react-bootstrap/lib/Tab'

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
    <div className='aceTabs'>
      <Tabs defaultActiveKey='index' id="uncontrolled-tab-example" onSelect={onSelect}>
        {renderTabs()}
      </Tabs>
    </div>
  );
}

export default AceTabs;