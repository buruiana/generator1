import React from 'react';
import PropsForm from './PropsForm/propsForm';
import ComponentInfo from './ComponentInfo/componentInfo';
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
          <PropsForm
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
