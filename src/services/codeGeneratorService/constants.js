export const renderActions = (action, payloadVal, payload1) => (
`export const ${action.name} = ${payloadVal} => ({
  type: ${action.actionType},
\u0009${payload1}
});\n\n`
);

export const renderActionTypesSuccess = actionType => (
  `export const ${actionType.name.toUpperCase()}_SUCCESS = '${actionType.name.toUpperCase()}_SUCCESS';\n`
);

export const renderActionTypesFail = actionType => (
  `export const ${actionType.name.toUpperCase()}_FAIL = '${actionType.name.toUpperCase()}_FAIL';\n`
);

export const renderActionTypes = actionType => (
  `export const ${actionType.name.toUpperCase()} = '${actionType.name.toUpperCase()}';\n`
);