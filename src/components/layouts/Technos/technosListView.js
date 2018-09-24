import React from 'react';

const TechnosView = props => {
  const { technos } = props;
  const technosList = () => {
    return (
      Object.keys(technos).forEach(techno => {
        <div key={key}>
          <div>name: {technos[key]}</div>
        </div>
      })
    );
  };

  return (
    <div>
      {technosList()}
    </div>
  );
}

export default TechnosView;