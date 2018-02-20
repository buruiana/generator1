import React from 'react';
import ReactAce from 'react-ace-editor';
import PropTypes from 'prop-types';

const AceView = ({ refAce }) => {
  return (
    <div>
      <ReactAce
        mode="javascript"
        theme="eclipse"
        setReadOnly={false}
        style={{ height: window.innerHeight }}
        value=""
        onBlur=""
        ref={refAce}
      />
    </div>
  );
};

AceView.propTypes = {
  refAce: PropTypes.func
};

export default AceView;
