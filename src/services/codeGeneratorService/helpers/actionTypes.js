export const generateActionTypesCode = actionTypes => {
  let code = '';

  actionTypes.map(el => {
    code = code + `export const ${el.name} = '${el.name}';`;
    if (el.isSuccess) {
      code = code + `export const ${el.name}_SUCCESS = '${el.name}_SUCCESS';\n`;
    }
    if (el.isFail) {
      code = code + `export const ${el.name}_FAIL = '${el.name}_FAIL';\n`;
    }
  });


  return code;
}
