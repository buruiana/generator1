import React from 'react';
import PropsInfo from './PropsInfo';
import ComponentInfo from './ComponentInfo';
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
          <PropsInfo
            initialValues={props.modalContent.props}
            modalContent={props.modalContent}
            modalVisible={props.modalVisible}
            closeModal={closeModal}
          />
        );
      case COMPONENT_INFO:
        return (
          <ComponentInfo
            modalContent={props.modalContent}
            modalVisible={props.modalVisible}
            setModalVisibility={props.setModalVisibility}
            closeModal={closeModal}
          />
        );
      case PROJECT_SETTINGS:
        return (
          <SettingsForm
            modalContent={props.modalContent}
            modalVisible={props.modalVisible}
            setModalVisibility={props.setModalVisibility}
            onSubmit={onSubmit}
            closeModal={closeModal}
            setProjectName={props.setProjectName}
            setProjectType={props.setProjectType}
            getProjectName={props.getProjectName}
            getProjectType={props.getProjectType}
          />
        );
      default: return null;
    }
  }
}

export default RenderModal;
