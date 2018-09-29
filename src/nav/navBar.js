import React from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';

const NavBar = props => {
  console.log('console: props', props);
  const { isOffline } = props;

  const renderNetworkStatus = () => {
    return isOffline ? 'OFFLINE' : 'ONLINE';
  };

  const setIsOffline = () => {
    props.setConfigsIsOffline(!isOffline);
  };

  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#">GENERATOR</a>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <NavItem eventKey={1} href="/home">Home</NavItem>
        <NavItem eventKey={2} href="/editor">Editor</NavItem>
        <NavItem eventKey={3} href="/providers">Providers</NavItem>
        <NavItem eventKey={4} href="/components">Components</NavItem>
        <NavItem eventKey={4} href="/propTypes">PropTypes</NavItem>
      </Nav>
      <Nav pullRight>
        <NavItem eventKey={111} onClick={setIsOffline}>
          {renderNetworkStatus()}
        </NavItem>
      </Nav>
    </Navbar>
  );
}

export default NavBar;