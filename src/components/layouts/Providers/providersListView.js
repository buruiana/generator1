import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { boxArray } from '../../../utils';

const ProvidersListView = props => {
  const providers = boxArray(props.providers);

  const providersList = () => {
    return providers.map(provider => {
      const { name, path } = provider;
      return (
        <ListGroupItem href="#link1" key={name}>
          <div className="container">
            <div>{name}</div>
            <div>{path}</div>
          </div>
        </ListGroupItem>
      );
    })
  };
  console.log('console: providersList', providersList());
  return (
    <div>
      <ListGroup>
        {providersList()}
      </ListGroup>
    </div>
  );
}

export default ProvidersListView;