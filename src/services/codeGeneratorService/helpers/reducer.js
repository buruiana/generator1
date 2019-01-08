import isEmpty from 'lodash/isEmpty';

export const generateReducerCode = reducer => {
  let code = ``;
  if (!isEmpty(reducer)) {
    code = `import * as actionTypes from './actionTypes';\n\n`;
    code+= `export const initialState = () => ({\n`;
    const reducerInitVals = [];
    reducer.map(el => {
      if (!isEmpty(el.payloadInfo)) {
        el.payloadInfo.map(payloadInfo => {
          const dup = reducerInitVals.find(el => el === payloadInfo.payload);
          if (isEmpty(dup)) {
            reducerInitVals.push(payloadInfo.payload);
            code += `${payloadInfo.payload}: ${payloadInfo.initVal},\n`;
          }
        });
      }
    });
    code += `});\n\n`;

    code += `export default (state = initialState(), action) => {\n`;
    code += ` switch (action.type) {\n`;


    reducer.map(el => {
      if (el.isActive) {
        code += `   case actionTypes.${el.name}:\n`;
        code += `     return {\n`;
        code += `       ...state,\n`;
        if (!isEmpty(el.payloadInfo)) {
          el.payloadInfo.map(payloadInfoEl => {
            code += `       ${payloadInfoEl.payload}: ${payloadInfoEl.payloadVal},\n`;
          });
        }
        code += `       };\n`;
      }
    });

    code += `  default:  return state;\n }\n`;
    code += `}\n`;

  }

  return code;
}
