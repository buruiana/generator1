import React from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import {
  PROJECT_SETTINGS,
  ACTIONS,
  ACTION_TYPES,
  SAGA,
  REDUCER,
} from '../../modals/constants';
import {
  SERVICE,
} from '../../../utils/constants';

const NavBarSettings = props => {
  const handleSelect = type =>  showModal(type);

  const showModal = (type) => {
    const node = [];
    props.setModalVisibility(true);
    props.setModalContent({ node, type });
  };

  const getProjectType = () => {
    if (props.projectType === SERVICE) {
      return true;
    }
    return false;
  };

  return (
    <Nav bsStyle="pills" activeKey={1} onSelect={handleSelect}>
      <NavItem eventKey={PROJECT_SETTINGS}>
        Project Settings
      </NavItem>
      { getProjectType() &&
        <NavItem eventKey={ACTION_TYPES}>
          Action Types
        </NavItem>
      }
      { getProjectType() &&
      <NavItem eventKey={ACTIONS} >
          Actions
      </NavItem>
      }
      { getProjectType() &&
      <NavItem eventKey={SAGA} >
        Saga
      </NavItem>
      }
      { getProjectType() &&
        <NavItem eventKey={REDUCER} >
          Reducer
      </NavItem>
      }
    </Nav>
  );
}

export default NavBarSettings;