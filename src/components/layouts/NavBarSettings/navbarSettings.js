import React from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import isEmpty from 'lodash/isEmpty';
import {
  PROJECT_SETTINGS,
  ACTIONS,
  ACTION_TYPES,
  SAGA,
  REDUCER,
  HOC,
  JSON_FORM_SETTINGS,
} from '../../modals/constants';
import {
  SERVICE,
  COMPONENT,
  SMART,
  APPLICATION,
} from '../../../utils/constants';

const NavBarSettings = props => {
  const handleSelect = type =>  showModal(type);

  const showModal = (type) => {
    const node = [];
    props.setModalVisibility(true);
    props.setModalContent({ node, type });
  };

  const isService = () => {
    return props.projectType === SERVICE
      ? true
      : false;
  };

  const isComponent = () => {
    return props.projectType === COMPONENT
      ? true
      : false;
  };

  const isApp = () => {
    return props.projectType === APPLICATION
      ? true
      : false;
  };

  const isSmart = () => {
    return (props.projectType === COMPONENT && props.componentType === SMART)
      ? true
      : false;
  };

  const hasActionTypes = () => !isEmpty(props.actionTypes);

  return (
    <Nav bsStyle="pills" activeKey={1} onSelect={handleSelect}>
      <NavItem eventKey={PROJECT_SETTINGS}>
        Project Settings
      </NavItem>
      {isService() &&
        <NavItem eventKey={ACTION_TYPES}>
          Action Types
        </NavItem>
      }
      {isService() && hasActionTypes() &&
      <NavItem eventKey={ACTIONS} >
          Actions
      </NavItem>
      }
      {isService() && hasActionTypes() &&
      <NavItem eventKey={SAGA} >
        Saga
      </NavItem>
      }
      {isService() && hasActionTypes() &&
        <NavItem eventKey={REDUCER} >
          Reducer
      </NavItem>
      }
      {isComponent() &&
        <NavItem eventKey={HOC} >
          Hoc
      </NavItem>
      }
      {isSmart() &&
        <NavItem eventKey={SMART} >
          Smart Settings
      </NavItem>
      }
      {isApp() &&
        <NavItem eventKey={APPLICATION} >
          App Settings
      </NavItem>
      }
      {isComponent() &&
        <NavItem eventKey={JSON_FORM_SETTINGS} >
          Json Form Settings
      </NavItem>
      }
    </Nav>
  );
}

export default NavBarSettings;