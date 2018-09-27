import React from 'react';
import PropsInfo from './PropsInfo';
import ComponentInfo from './ComponentInfo';
import ProjectSettings from './ProjectSettings';
import {
  PROPS_FORM,
  COMPONENT_INFO,
  PROJECT_SETTINGS
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
      default: return null;
    }
  }
}

export default RenderModal;
