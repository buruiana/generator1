import React from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';


const NavBar = configs => {
  console.log('console: configs', configs);
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
          {configs.isOffline ? 'OFFLINE' : 'ONLINE'}
        </NavItem>
      </Nav>
    </Navbar>
  );
}

export default NavBar;