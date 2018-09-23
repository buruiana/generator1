import React from 'react';
import PropsForm from './PropsForm/propsForm';
import ComponentInfo from './ComponentInfo/componentInfo';

const RenderModal = props => {

  const onSubmit = () => {
    console.log('console: onSubmit');
  };

  const closeModal = () => {
    props.setModalVisibility(false);
  };

  if (props.modalContent) {
    switch (props.modalContent.type) {
      case 'propsForm':
        return (
          <PropsForm
            //onSubmit={onSubmit(props.getTree)}
            initialValues={props.modalContent.props}
            modalContent={props.modalContent}
            modalVisible={props.modalVisible}
            closeModal={closeModal}
          />
        );
      case 'componentInfo':
        return (
          <ComponentInfo
            modalContent={props.modalContent}
            modalVisible={props.modalVisible}
            setModalVisibility={props.setModalVisibility}
            closeModal={closeModal}
          />
        );
      case 'settings':
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
