import React from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { PROJECT_SETTINGS } from '../../modals/constants';

const NavBarSettings = props => {
  const handleSelect = type => {
    console.log('console: handleSelect', event);
    showModal(type, );
  };

  const showModal = (type) => {
    const node = [];
    props.setModalVisibility(true);
    props.setModalContent({ node, type });
  };

  return (
    <Nav bsStyle="pills" activeKey={1} onSelect={handleSelect}>
      <NavItem eventKey={PROJECT_SETTINGS}>
        Project Settings
      </NavItem>
        <NavItem eventKey={2} title="Item">
          NavItem 2 content
      </NavItem>
        <NavItem eventKey={3} disabled>
          NavItem 3 content
      </NavItem>
    </Nav>
  );
}

export default NavBarSettings;