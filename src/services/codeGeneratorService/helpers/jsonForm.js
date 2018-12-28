import { jsonFormTemplate } from '../templates/jsonForm';

const Mustache = require('mustache');

export const generateJsonFormCode = props => {
  const { jsonForm } = props;
  const data = {
    jsonForm,
  };

  return Mustache.render(jsonFormTemplate, data);
}