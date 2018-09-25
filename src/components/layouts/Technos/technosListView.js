import React from 'react';
import { boxArray } from '../../../utils';

const TechnosListView = props => {
  const technos = boxArray(props.technos);

  const technosList = () => {
    return technos.map(techno => {
      return (
        <div key={techno.name}>
          name: {techno.name}
        </div>
      );
    })
  };
  console.log('console: technosList', technosList());
  return (
    <div>
      {technosList()}
    </div>
  );
}

export default TechnosListView;