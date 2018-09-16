import React from 'react';
import PropsForm from './PropsForm';
import ComponentInfo from './ComponentInfo';

export default function renderModal(props) {
  const onSubmit = () => {
    console.log('console: onSubmit');
  };

  const closeModal = () => {
    props.setModalVisibility(false);
  };

  if (props.modalContent.type === 'propsForm') {
    return (
      <PropsForm
        //onSubmit={onSubmit(props.getTree)}
        initialValues={props.modalContent.props}
        modalContent={props.modalContent}
        modalVisible={props.modalVisible}
        closeModal={closeModal}
      />
    );
  } else if (props.modalContent.type === 'componentInfo') {
    return (
      <ComponentInfo
        modalContent={props.modalContent}
        modalVisible={props.modalVisible}
        setModalVisibility={props.setModalVisibility}
        closeModal={closeModal}
      />
    );
  } else if (props.modalContent.type === 'settings') {
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
  }
}
