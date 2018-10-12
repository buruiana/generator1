export const sagaTemplate = `
import { call, put, takeLatest, select } from "redux-saga/effects";
import {
{{#saga}}
  {{#isActive}}
  {{name}},
  {{/isActive}}
  {{/saga}}
} from './actionTypes';

{{#saga}}
{{#isActive}}
export function* {{watcher}}(action) {

}
{{/isActive}}
{{/saga}}

export default function* rootSaga() {
  {{#saga}}
  {{#isActive}}
  yield takeLatest({{name}}, {{watcher}});
  {{/isActive}}
  {{/saga}}
}`;