import React from 'react';
import PropTypes from 'prop-types';
import { ModalFooter as RSModalFooter } from 'reactstrap';

const ModalFooter = ({ children, ...props }) => {
  return <RSModalFooter {...props}>{children}</RSModalFooter>;
};

ModalFooter.propTypes = {
  children: PropTypes.node
};

export default ModalFooter;
