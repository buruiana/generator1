import React from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import Tooltip from 'react-bootstrap/lib/Tooltip';
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

  const tooltip = tip => <Tooltip id="tooltip">{tip}</Tooltip>;

  return (
    <div>
      <Navbar className='navbar-settings'>
        <Nav bsStyle="pills" activeKey={1} onSelect={handleSelect} >
          {props.projectName &&
            <NavItem eventKey={INIT_APP}>
              <span className='navBar-txt'>PROJECT</span>
              <Glyphicon glyph="flash" />
              Init Project
            </NavItem>
          }
          <NavItem eventKey={PROJECT_SETTINGS}><Glyphicon glyph="cog" />Project Settings</NavItem>
          {isService(props.projectType) &&
            <NavItem eventKey={ACTION_TYPES}>
              <span className='navBar-txt'>REDUX</span>
              Action types
              </NavItem>
          }
          {isService(props.projectType) && hasActionTypes(props.actionTypes) &&
            <NavItem eventKey={ACTIONS}>Actions</NavItem>
          }
          {isService(props.projectType) && hasActionTypes(props.actionTypes) &&
            <NavItem eventKey={SAGA}>Saga</NavItem>
          }
          {isService(props.projectType) && hasActionTypes(props.actionTypes) &&
            <NavItem eventKey={REDUCER}>Reducer</NavItem>
          }
          {isComponent(props.projectType) &&
            <NavItem eventKey={HOC}>
            <span className='navBar-txt'>COMPONENT</span>
              <Glyphicon glyph="road" />HOC
            </NavItem>
          }
          {isSmart(props.projectType, props.componentType) &&
            <NavItem eventKey={SMART}>Smart Settings</NavItem>
          }
          {isApp(props.projectType) &&
            <NavItem eventKey={APPLICATION}>
              <span className='navBar-txt'></span>APP
              <Glyphicon glyph="option-vertical" />
              <Glyphicon glyph="th-list" />
              Settings
            </NavItem>
          }
        </Nav>
        <Nav pullRight bsStyle="pills" activeKey={1} onSelect={handleSelect}>
          {isComponent(props.projectType) && props.hasJsonForm &&
            <NavItem eventKey={JSON_FORM_SETTINGS}>
              <span className='navBar-txt'>JSONFORM</span>
              <Glyphicon glyph="object-align-top" />
              Schema
            </NavItem>
          }
          {isComponent(props.projectType) && props.hasJsonForm && !isEmpty(props.jsonForm) &&
            <NavItem eventKey={JSON_FORM_UI_SETTINGS}><Glyphicon glyph="object-align-bottom" />uiSchema</NavItem>
          }
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBarSettings;