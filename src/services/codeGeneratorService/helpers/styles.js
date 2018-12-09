import { stylesTemplate } from '../templates/styles';
import { getStylesList } from './helper';

const Mustache = require('mustache');

export const generateStylesCode = tree => {
  const styles = getStylesList(tree);

  const data = {
    styles,
  };
  return Mustache.render(stylesTemplate, data);
}