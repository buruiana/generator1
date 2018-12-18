import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/lib/Modal';
import ProjectSettingsForm from '../../forms/ProjectSettings';
import { PROJECT_SETTINGS } from '../../modals/constants';

const ProjectSettings = ({ closeModal, allModals, currentModal }) => {
  return (
    <div>
      <Modal show={currentModal === PROJECT_SETTINGS} onHide={closeModal} bsSize="large"
        aria-labelledby="contained-modal-title-lg">
        <Modal.Header closeButton>
          <Modal.Title>
            Project Settings
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div>
            <ProjectSettingsForm closeModal={closeModal}/>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

ProjectSettings.propTypes = {
  allModals: PropTypes.array,
  currentModal: PropTypes.string,
  closeModal: PropTypes.func
};

export default ProjectSettings;
