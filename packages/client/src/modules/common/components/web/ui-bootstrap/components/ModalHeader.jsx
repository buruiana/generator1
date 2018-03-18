import React from 'react';
import PropTypes from 'prop-types';
import { ModalHeader as RSModalHeader } from 'reactstrap';

const ModalHeader = ({ children, ...props }) => {
  return <RSModalHeader {...props}>{children}</RSModalHeader>;
};

ModalHeader.propTypes = {
  children: PropTypes.node
};

export default ModalHeader;
