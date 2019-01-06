import axios from 'axios';
import { put } from "redux-saga/effects";
import { setProjectError } from '../services/projectSettingsService/actions';

export const boxArray = obj => {
  return Object.prototype.toString.call(obj) != '[object Array]'
    ?  Object.values(obj)
    : obj;
};

const prettify = code => {
  return axios.post('http://localhost:5000/api/prettify', code);
}

export function* getPrettyCode(code) {
  let prettyCode = '';
  try {
    const res = yield prettify({ code });
    prettyCode = res.data;
  } catch (err) {
    prettyCode = JSON.parse(err.config.data);
    prettyCode = prettyCode.code;
    yield put(setProjectError(err.response.data));
  }
  return prettyCode;
}