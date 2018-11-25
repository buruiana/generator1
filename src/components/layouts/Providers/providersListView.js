import React from 'react';
import { Link } from "react-router";
import Table from 'react-bootstrap/lib/Table';
import PageHeader from 'react-bootstrap/lib/PageHeader';

const ProvidersListView = props => {
  const providers = props.providers;

  const deleteProvider = event => {
    props.deleteProvider({ id: event.target.id });
  };

  const providersList = () => {
    return providers.map(provider => {
      const { name, id } = provider;

      return (
        <tr key={id}>
          <td>
            <h4><Link to={`/providers/${id}`}>{name}</Link></h4>
          </td>
          <td><h5>{name}</h5></td>
          <td>
            <h5><a className="deleteStyle" id={id} onClick={deleteProvider}>Delete</a></h5>
          </td>
        </tr>
      );
    })
  };

  return (
    <div className="middle20">
      <PageHeader>Providers</PageHeader>
      <Link to={`/providers/new`} className='linkStyle'>Add New</Link>
      <Table striped bordered condensed hover responsive>
        <tbody>
          {providersList()}
        </tbody>
      </Table>
    </div>
  );
}

export default ProvidersListView;