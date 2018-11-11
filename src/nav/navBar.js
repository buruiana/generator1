import React from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';

const NavBar = props => {
  const { isOffline } = props;

  const renderNetworkStatus = () => {
    return isOffline ? 'OFFLINE' : 'ONLINE';
  };

  const setIsOffline = () => {
    props.setConfigsIsOffline(!isOffline);
    props.initApp();
  };

  const redirect = event => {
    props.router.push(event.target.id);
  };

  return (
    <Navbar className='navBar'>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#">GENERATOR</a>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <NavItem eventKey={1} id="home" onClick={redirect}>Home</NavItem>
        <NavItem eventKey={2} id="editor" onClick={redirect}>Editor</NavItem>
        <NavItem eventKey={3} id="providers" onClick={redirect}>Providers</NavItem>
        <NavItem eventKey={4} id="components" onClick={redirect}>Components</NavItem>
        <NavItem eventKey={4} id='propTypes' onClick={redirect}>PropTypes</NavItem>
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