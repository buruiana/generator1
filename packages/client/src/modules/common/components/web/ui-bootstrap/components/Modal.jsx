import React from 'react';
import PropTypes from 'prop-types';
import { Modal as RSModal } from 'reactstrap';

const Modal = ({ children, ...props }) => {
  return <RSModal {...props}>{children}</RSModal>;
};

Modal.propTypes = {
  children: PropTypes.node
};

export default Modal;
