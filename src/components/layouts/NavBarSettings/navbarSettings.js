import React from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import {
  PROJECT_SETTINGS,
  ACTIONS,
  ACTION_TYPES,
} from '../../modals/constants';

const NavBarSettings = props => {
  const handleSelect = type =>  showModal(type);

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
      <NavItem eventKey={ACTION_TYPES}>
          Action Types
      </NavItem>
      <NavItem eventKey={ACTIONS} >
          Actions
      </NavItem>
    </Nav>
  );
}

export default NavBarSettings;