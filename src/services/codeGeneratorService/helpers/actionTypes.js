export const generateActionTypesCode = actionTypes => {
  let actionTypesCode = '';

  actionTypes.map(actionType => {
    actionTypesCode += `export const ${actionType.name.toUpperCase()} = '${actionType.name.toUpperCase()}';\n`;
    if (actionType.isSuccess) {
      actionTypesCode += `export const ${actionType.name.toUpperCase()}_SUCCESS = '${actionType.name.toUpperCase()}_SUCCESS';\n`;
    }
    if (actionType.isFail) {
      actionTypesCode += `export const ${actionType.name.toUpperCase()}_FAIL = '${actionType.name.toUpperCase()}_FAIL';\n`;
    }
    return actionTypesCode;
  });

  return actionTypesCode;
}