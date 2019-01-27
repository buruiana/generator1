import React from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';

const NavBar = props => {
  const { isOffline } = props;

  const networkStatusClass = () => {
    return isOffline ? 'offline' : 'online';
  };

  const setIsOffline = () => {
    props.setConfigsIsOffline(!isOffline);
    props.initApp();
    props.initProject();
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
        <NavItem eventKey={1} id="home" onClick={redirect}>HOME</NavItem>
        <NavItem eventKey={2} id="editor" onClick={redirect}>EDITOR</NavItem>
      </Nav>
      <Nav pullRight>
        <NavItem eventKey={3} id="providers" onClick={redirect}>PROVIDERS</NavItem>
        <NavItem eventKey={4} id="components" onClick={redirect}>COMPONENTS</NavItem>
        <NavItem eventKey={4} id='propTypes' onClick={redirect}>PROPTYPES</NavItem>
        <NavItem eventKey={5} onClick={setIsOffline}>
          <Glyphicon glyph="signal" className={networkStatusClass()}/>
        </NavItem>
      </Nav>
    </Navbar>
  );
}

export default NavBar;