import React from 'react';
import { boxArray } from '../../../utils';
import { Link } from "react-router";
import Table from 'react-bootstrap/lib/Table';
import PageHeader from 'react-bootstrap/lib/PageHeader';

const PropTypesListView = props => {
  const propTypes = props.propTypes;

  const deletePropType = event => {
    props.deletePropType({ id: event.target.id });
  };

  const propTypesList = () => {
    return boxArray(propTypes).map(propType => {
      const { name, id } = propType;

      return (
        <tr key={id}>
          <td>
            <h4><Link to={`/propTypes/${id}`}>{name}</Link></h4>
          </td>
          <td><h5>{name}</h5></td>
          <td>
            <h5><a className="deleteStyle" id={id} onClick={deletePropType}>Delete</a></h5>
          </td>
        </tr>
      );
    })
  };

  return (
    <div className="middle20">
      <PageHeader>propTypes</PageHeader>
      <Link to={`/propTypes/new`} className='linkStyle'>Add New</Link>
      <Table striped bordered condensed hover responsive>
        <tbody>
          {propTypesList()}
        </tbody>
      </Table>
    </div>
  );
}

export default PropTypesListView;