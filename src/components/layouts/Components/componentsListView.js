import React from 'react';
import { Link } from "react-router";
import Table from 'react-bootstrap/lib/Table';
import isEmpty from 'lodash/isEmpty';
import get from 'lodash/get';
import ComponentSearchForm from '../../forms/ComponentSearch';
import PageHeader from 'react-bootstrap/lib/PageHeader';

const ComponentsListView = props => {
  const components = props.components;

  const deleteComponent = event => {
    props.deleteComponent({ id: event.target.id });
  };

  const filteredComponents = () => {
    return components.filter(el => {
      if (!isEmpty(props.searchData) && props.searchData.name) {
        return (el.title.toLowerCase().indexOf(props.searchData.name.toLowerCase()) !== -1
          && get(props.searchData, 'provider', el.provider) === el.provider)
      }
      return (get(props.searchData, 'provider', el.provider) === el.provider);
    });
  };

  const componentsList = () => {
    return filteredComponents().map(component => {
      const { title, id, provider } = component;

      return (
        <tr key={id}>
          <td>
            <h4><Link to={`/components/${id}`}>{title}</Link></h4>
          </td>
          <td><h5>{provider}</h5></td>
          <td>
            <h5><a className="linkStyle" id={id} onClick={deleteComponent}>Delete</a></h5>
          </td>
        </tr>
      );
    })
  };

  return (
    <div className="middle10">
      <PageHeader>Components</PageHeader>
      <ComponentSearchForm />
      <Link to={`/components/new`} className='linkStyle'>Add New</Link>
      <Table striped bordered condensed hover responsive>
        <tbody>
          {componentsList()}
        </tbody>
      </Table>
    </div>
  );
}

export default ComponentsListView;