import React from 'react';
import PropTypes from 'prop-types';
import { ModalBody as RSModalBody } from 'reactstrap';

const ModalBody = ({ children, ...props }) => {
  return <RSModalBody {...props}>{children}</RSModalBody>;
};

ModalBody.propTypes = {
  children: PropTypes.node
};

export default ModalBody;
