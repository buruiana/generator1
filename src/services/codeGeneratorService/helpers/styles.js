import isEmpty from 'lodash/isEmpty';
import { getStylesList } from './helper';

export const generateStylesCode = tree => {
  let code = '';
  const stylesList = getStylesList(tree);
  if (!isEmpty(stylesList)) {
    stylesList.map(el => {
      code += `.${el} {};`;
    });
  }

  return code;
}
