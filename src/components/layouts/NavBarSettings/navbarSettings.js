import React from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import isEmpty from 'lodash/isEmpty';
import Navbar from 'react-bootstrap/lib/Navbar';
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
  SMART,
  APPLICATION,
  INIT_APP,
} from '../../../utils/constants';
import {
  isService,
  isComponent,
  isApp,
  isSmart,
  hasActionTypes,
} from './helper';

const NavBarSettings = props => {
  const handleSelect = type => {
    return type === INIT_APP
      ? props.initApp()
      : showModal(type);
  };
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

  return (
    <Navbar>
      <Nav bsStyle="pills" activeKey={1} onSelect={handleSelect}>
        <NavItem eventKey={INIT_APP}>
          <Glyphicon glyph="flash" />
        </NavItem>
        <NavItem eventKey={PROJECT_SETTINGS}>
          Project Settings
        </NavItem>
        {isService(props.projectType) &&
          <NavItem eventKey={ACTION_TYPES}>
            Action Types
          </NavItem>
        }
        {isService(props.projectType) && hasActionTypes(props.actionTypes) &&
          <NavItem eventKey={ACTIONS} >
              Actions
          </NavItem>
        }
        {isService(props.projectType) && hasActionTypes(props.actionTypes) &&
          <NavItem eventKey={SAGA} >
            Saga
          </NavItem>
        }
        {isService(props.projectType) && hasActionTypes(props.actionTypes) &&
          <NavItem eventKey={REDUCER} >
            Reducer
          </NavItem>
        }
        {isComponent(props.projectType) &&
          <NavItem eventKey={HOC} >
            Hoc
          </NavItem>
        }
        {isSmart(props.projectType, props.componentType) &&
          <NavItem eventKey={SMART} >
            Smart Settings
          </NavItem>
        }
        {isApp(props.projectType) &&
          <NavItem eventKey={APPLICATION} >
            App Settings
          </NavItem>
        }
      </Nav>
      <Nav pullRight bsStyle="pills" activeKey={1} onSelect={handleSelect}>
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
    </Navbar>
  );
}

export default NavBarSettings;