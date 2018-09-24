import React from 'react';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';


const NavBarInstance = () => (
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
      <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
        <MenuItem eventKey={3.1}>Action</MenuItem>
        <MenuItem eventKey={3.2}>Another action</MenuItem>
        <MenuItem eventKey={3.3}>Something else here</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={3.3}>Separated link</MenuItem>
      </NavDropdown>
    </Nav>
  </Navbar>
);

export default NavBarInstance;