import React from 'react';
import PropsInfo from './PropsInfo';
import ComponentInfo from './ComponentInfo';
import ProjectSettings from './ProjectSettings';
import Actions from './Actions';
import ActionTypes from './ActionTypes';
import Sagas from './Sagas';
import {
  PROPS_FORM,
  COMPONENT_INFO,
  PROJECT_SETTINGS,
  ACTION_TYPES,
  ACTIONS,
  SAGAS,
} from './constants';

const RenderModal = props => {

  const closeModal = () => {
    props.setModalVisibility(false);
  };

  if (props.modalContent) {
    switch (props.modalContent.type) {
      case PROPS_FORM:
        return (
          <PropsInfo  closeModal={closeModal} />
        );
      case COMPONENT_INFO:
        return (
          <ComponentInfo closeModal={closeModal} />
        );
      case PROJECT_SETTINGS:
        return (
          <ProjectSettings closeModal={closeModal} />
        );
      case ACTION_TYPES:
        return (
          <ActionTypes closeModal={closeModal} />
        );
      case ACTIONS:
        return (
          <Actions closeModal={closeModal} />
        );
      case SAGAS:
        return (
          <Sagas closeModal={closeModal} />
        );
      default: return null;
    }
  }
}

export default RenderModal;
