import React from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';


const NavBar = configs => {
  const { isOffline } = configs.configs;

  const renderNetworkStatus = () => {
    return isOffline ? 'OFFLINE' : 'ONLINE';
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
        <NavItem eventKey={4} href="/technos">Technos</NavItem>
      </Nav>
      <Nav pullRight>
        <NavItem eventKey={1} href="#">
          {renderNetworkStatus()}
        </NavItem>
      </Nav>
    </Navbar>
  );
}

export default NavBar;