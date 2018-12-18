import React from 'react';
import isEmpty from 'lodash/isEmpty';
import PropsInfo from './PropsInfo';
import ComponentInfo from './ComponentInfo';
import ProjectSettings from './ProjectSettings';
import Actions from './Actions';
import ActionTypes from './ActionTypes';
import Saga from './Saga';
import Reducer from './Reducer';
import Hoc from './Hoc';
import Smart from './Smart';
import AppSettings from './AppSettings';
import JsonFormSettings from './JsonFormSettings';
import JsonFormInfo from './JsonFormInfo';
import {
  PROPS_FORM,
  COMPONENT_INFO,
  PROJECT_SETTINGS,
  ACTION_TYPES,
  ACTIONS,
  SAGA,
  REDUCER,
  HOC,
  SMART,
  APPLICATION,
  JSON_FORM_SETTINGS,
  JSON_FORM_INFO,
} from './constants';

const RenderModal = props => {

  const closeModal = () => {
    const newAllModals = props.allModals.filter(el => el.modalName !== props.currentModal);

    props.setAllModals(newAllModals);
    if (!isEmpty(newAllModals)) {
      props.setCurrentModal(newAllModals[newAllModals.length - 1].modalName || '');
    } else {
      props.setCurrentModal('');
    }
  };

  const modalVisible = type => props.currentModal === type;
  console.log('console: props.allModals', props.allModals);
  let modalContent = type => props.allModals.filter(el => el.modalName === props.currentModal);


  if (props.currentModal) {
    switch (props.currentModal) {
      case PROPS_FORM:
        return (
          <PropsInfo
            closeModal={closeModal}
            modalVisible={modalVisible(PROPS_FORM)}
            modalContent={modalContent(PROPS_FORM)} />
        );
      case COMPONENT_INFO:
        return (
          <ComponentInfo
            closeModal={closeModal}
            modalVisible={modalVisible(COMPONENT_INFO)}
            modalContent={modalContent(COMPONENT_INFO)} />
        );
      case PROJECT_SETTINGS:
        return (
          <ProjectSettings
            closeModal={closeModal}
            modalVisible={modalVisible(PROJECT_SETTINGS)}
            modalContent={modalContent(PROJECT_SETTINGS)} />
        );
      case ACTION_TYPES:
        return (
          <ActionTypes
            closeModal={closeModal}
            modalVisible={modalVisible(ACTION_TYPES)}
            modalContent={modalContent(ACTION_TYPES)} />
        );
      case ACTIONS:
        return (
          <Actions
            closeModal={closeModal}
            modalVisible={modalVisible(ACTIONS)}
            modalContent={modalContent(ACTIONS)} />
        );
      case SAGA:
        return (
          <Saga
            closeModal={closeModal}
            modalVisible={modalVisible(SAGA)}
            modalContent={modalContent(SAGA)} />
        );
      case REDUCER:
        return (
          <Reducer
            closeModal={closeModal}
            modalVisible={modalVisible(REDUCER)}
            modalContent={modalContent(REDUCER)} />
        );
      case HOC:
        return (
          <Hoc
            closeModal={closeModal}
            modalVisible={modalVisible(HOC)}
            modalContent={modalContent(HOC)} />
        );
      case SMART:
        return (
          <Smart
            closeModal={closeModal}
            modalVisible={modalVisible(SMART)}
            modalContent={modalContent(SMART)} />
        );
      case APPLICATION:
        return (
          <AppSettings
            closeModal={closeModal}
            modalVisible={modalVisible(APPLICATION)}
            modalContent={modalContent(APPLICATION)} />
        );
      case JSON_FORM_SETTINGS:
        return (
          <JsonFormSettings
            closeModal={closeModal}
            modalVisible={modalVisible(JSON_FORM_SETTINGS)}
            modalContent={modalContent(JSON_FORM_SETTINGS)} />
        );
      case JSON_FORM_INFO:
        return (
          <JsonFormInfo
            closeModal={closeModal}
            modalVisible={modalVisible(JSON_FORM_INFO)}
            modalContent={modalContent(JSON_FORM_INFO)} />
        );
      default: return null;
    }
  }
}

export default RenderModal;
