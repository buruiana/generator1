import React from 'react';
import { Link } from "react-router";
import Table from 'react-bootstrap/lib/Table';
import PageHeader from 'react-bootstrap/lib/CarouselCaption';
import isEmpty from 'lodash/isEmpty';
import sortBy from 'lodash/sortBy';
import get from 'lodash/get';
import ComponentSearchForm from '../../forms/ComponentSearch';

const ProvidersListView = props => {
  const providers = props.providers;

  const deleteProvider = event => {
    props.deleteProvider({ id: event.target.id });
  };

  const filteredItems = () => {
    const filteredProviders = providers.filter(el => {
      if (!isEmpty(props.searchData) && props.searchData.name) {
        return (el.name.toLowerCase().indexOf(props.searchData.name.toLowerCase()) !== -1
          && get(props.searchData, 'provider', el.name) === el.name
          && get(props.searchData, 'projectTechno', el.projectTechno) === el.projectTechno)
      }
      return (get(props.searchData, 'provider', el.name) === el.name
        && get(props.searchData, 'projectTechno', el.projectTechno) === el.projectTechno);
    });
    return sortBy(filteredProviders, el => el.name);
  };

  const providersList = () => {
    return filteredItems().map(provider => {
      const { name, id, projectTechno, providerUrl } = provider;

      return (
        <tr key={id}>
          <td>
            <h4><Link to={`/providers/${id}`}>{name}</Link></h4>
          </td>
          <td><h5>{projectTechno}</h5></td>
          <td><h5>{name}</h5></td>
          <td><h5><a href={providerUrl} target='blank'>url</a></h5></td>
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
      <ComponentSearchForm />
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