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
              <OverlayTrigger placement="top" overlay={tooltip('Init Project')}>
                <Glyphicon glyph="flash" />
              </OverlayTrigger>
            </NavItem>
          }
          <NavItem eventKey={PROJECT_SETTINGS}>
            <OverlayTrigger placement="top" overlay={tooltip('Project Settings')}>
              <Glyphicon glyph="cog" />
            </OverlayTrigger>
          </NavItem>
          {isService(props.projectType) &&
            <NavItem eventKey={ACTION_TYPES}>
              AT
            </NavItem>
          }
          {isService(props.projectType) && hasActionTypes(props.actionTypes) &&
            <NavItem eventKey={ACTIONS} >
              A
            </NavItem>
          }
          {isService(props.projectType) && hasActionTypes(props.actionTypes) &&
            <NavItem eventKey={SAGA} >
              S
          </NavItem>
          }
          {isService(props.projectType) && hasActionTypes(props.actionTypes) &&
            <NavItem eventKey={REDUCER} >
              R
            </NavItem>
          }
          {isComponent(props.projectType) &&
            <NavItem eventKey={HOC} >
              <OverlayTrigger placement="top" overlay={tooltip('Higher Order Component')}>
                <Glyphicon glyph="header" />
              </OverlayTrigger>
            </NavItem>
          }
          {isSmart(props.projectType, props.componentType) &&
            <NavItem eventKey={SMART} >
              <OverlayTrigger placement="top" overlay={tooltip('Smart Settings')}>
                <Glyphicon glyph="tower" />
              </OverlayTrigger>
            </NavItem>
          }
          {isApp(props.projectType) &&
            <NavItem eventKey={APPLICATION} >
              App Settings
          </NavItem>
          }
        </Nav>
        <Nav pullRight bsStyle="pills" activeKey={1} onSelect={handleSelect}>
          {isComponent(props.projectType) && props.hasJsonForm &&
            <NavItem eventKey={JSON_FORM_SETTINGS} >
              <OverlayTrigger placement="top" overlay={tooltip('JsonForm Schema')}>
                <Glyphicon glyph="baby-formula" />
              </OverlayTrigger>
            </NavItem>
          }
          {isComponent(props.projectType) && props.hasJsonForm && !isEmpty(props.jsonForm) &&
            <NavItem eventKey={JSON_FORM_UI_SETTINGS} >
              <OverlayTrigger placement="top" overlay={tooltip('JsonForm UISchema')}>
                <Glyphicon glyph="tent" />
              </OverlayTrigger>
            </NavItem>
          }
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBarSettings;