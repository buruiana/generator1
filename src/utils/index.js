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
  if (!code) return;
  let prettyCode = '';
  try {
    yield put(setProjectError(''));
    const res = yield prettify({ code });
    prettyCode = res.data;
  } catch (err) {
    prettyCode = JSON.parse(err.config.data);
    prettyCode = prettyCode.code;

    yield put(setProjectError(err.response.data));
  }
  return prettyCode;
}

const generateApp = appSettings => {
  return axios.post('http://localhost:5000/api/generateApp', appSettings);
}

export function* generateAppBE(appSettings) {
  console.log('console: appSettingsappSettings', appSettings);
  if (!appSettings) return;
  let result = '';
  try {
    const res = yield generateApp({ appSettings });
    result = res.data;
    console.log('console: result', result);
  } catch (err) {
    console.log('console: err', err);
    // prettyCode = JSON.parse(err.config.data);
    // prettyCode = prettyCode.code;

    // yield put(setProjectError(err.response.data));
  }
  return result;
}

