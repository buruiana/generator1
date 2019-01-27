import React from 'react';
import Form from "react-jsonschema-form";
import LayoutField from 'react-jsonschema-form-layout';
import isEmpty from 'lodash/isEmpty';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import {
  REACT_NATIVE,
  REACT,
} from '../../../utils/constants';
import { PROJECT_SETTINGS } from '../../modals/constants';
import ExportFilesView from '../../layouts/ExportFiles';

const ComponentsSearchForm = props => {
  const { providers, projectTechno } = props;
  const providersEnums = !isEmpty(providers)
    ? providers.map(provider => provider.name)
    : [];

  const technoTypeEnums = [REACT, REACT_NATIVE];

  const schema = {
    type: "object",
    properties: {
      name: { type: "string", default: '' },
      projectTechno: {
        type: 'string',
        enum: technoTypeEnums,
        default: projectTechno || undefined,
      },
      provider: {
        type: "string",
        enum: providersEnums,
      },
    },
  };

  const fields = {
    layout: LayoutField
  }

  const uiSchema = {
    name: {
      "ui:options": {
        "label": false,
      },
      "ui:placeholder": "Name",
    },
    projectTechno: {
      "ui:placeholder": "All technos",
      "ui:options": {
        "label": false,
      },
    },
    provider: {
      "ui:placeholder": "All providers",
      "ui:options": {
        "label": false,
      },
    },
    'ui:field': 'layout',
    'ui:layout': [
      {
        name: { md: 4 },
        projectTechno: { md: 4 },
        provider: { md: 4 },
      },
    ],
  };

  const onChange = data => {
    const { formData } = data;
    props.setFilterData(formData);
  };

  const log = (type) => console.log.bind(console, type);

  const renderExportStatus = () => {
    return props.exported
      ? <span className='successExport'><Glyphicon glyph="ok-circle" className='downloadFiles' /></span>
      : null;
  }

  const showModal = type => {
    console.log('console: type', props);
    const node = [];
    const newEl = {
      modalName: type,
      modalVisible: true,
      modalContent: { node, type },
    };

    const newAllModals = [...props.allModals];
    newAllModals.push(newEl);
    console.log('console: newAllModals', newAllModals );
    props.setCurrentModal(type);
    props.setAllModals(newAllModals);
  };

  const changeDest = () => {
    showModal(PROJECT_SETTINGS);
  }

  return (
    <Row>
      <Col md={7}>
        <div className='filterComponentsBox'>
          <span className='filterComponentsLabel'>FILTER COMPONENTS</span>
          <div className='paddingTop'>
            <Form schema={schema}
              uiSchema={uiSchema}
              onChange={onChange}
              onError={log("errors")}
              fields={fields}
              autocomplete='off'
              >
            <button type="submit" className="hidden">Submit</button>
            </Form>
          </div>
        </div>
      </Col>
      <Col md={5}>
        <div className='filterComponentsBox1'>
          <div className='destinationLabel'>
            <span className='filterComponentsLabel'>DESTINATION</span>:
            <span className='exportDest'> {props.projectDestination || 'NO DESTINATION'}</span>
            <a className='changeDest' onClick={changeDest}>( change )</a>
          </div>
          <div>
            <Glyphicon glyph="download-alt" className='downloadFiles' />
            <ExportFilesView />
            {renderExportStatus()}
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default ComponentsSearchForm;