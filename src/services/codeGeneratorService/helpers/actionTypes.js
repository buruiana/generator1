import {
  renderActionTypes,
  renderActionTypesSuccess,
  renderActionTypesFail,
} from '../renders';

export const generateActionTypesCode = actionTypes => {
  let actionTypesCode = '';

  actionTypes.map(actionType => {
    actionTypesCode += renderActionTypes(actionType);
    if (actionType.isSuccess) {
      actionTypesCode += renderActionTypesSuccess(actionType);
    }
    if (actionType.isFail) {
      actionTypesCode += renderActionTypesFail(actionType);
    }
    return actionTypesCode;
  });

  return actionTypesCode;
}



