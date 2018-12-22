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
  JSON_FORM_UI_SETTINGS,
} from '../../modals/constants';
import {
  SERVICE,
  COMPONENT,
  SMART,
  APPLICATION,
} from '../../../utils/constants';

const NavBarSettings = props => {
  const handleSelect = type =>  showModal(type);
console.log('console: =========', props);
  const showModal = (type) => {
    const node = [];
    const newEl = {
      modalName: type,
      modalVisible: true,
      modalContent: { node, type },
    };

    const newAllModals = [...props.allModals];
    newAllModals.push(newEl);

    props.setCurrentModal(type);
    props.setAllModals(newAllModals);
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
      {isComponent() && props.hasJsonForm &&
        <NavItem eventKey={JSON_FORM_SETTINGS} >
          JsonForm Schema
        </NavItem>
      }
      {isComponent() && props.hasJsonForm && !isEmpty(props.jsonForm) &&
        <NavItem eventKey={JSON_FORM_UI_SETTINGS} >
          JsonForm uiSchema
        </NavItem>
      }
    </Nav>
  );
}

export default NavBarSettings;