import axios from 'axios';
import { put } from "redux-saga/effects";
import isEmpty from 'lodash/isEmpty';
import { setProjectError } from '../services/projectSettingsService/actions';

export const boxArray = obj => {
  return Object.prototype.toString.call(obj) != '[object Array]'
    ?  Object.values(obj)
    : obj;
};

const prettify = (code, parser) => {
  return axios.post('http://localhost:5000/api/prettify', code, parser);
}

export function* getPrettyCode(code, parser="babylon") {
  if (!code) return;
  //if (isEmpty(parser)) parser = 'babylon';
  let prettyCode = '';
  try {
    yield put(setProjectError(''));
    const res = yield prettify({ code, parser });
    prettyCode = res.data;
  } catch (err) {
    console.log('console: err', err);
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
  if (!appSettings) return;
  let result = '';
  try {
    const res = yield generateApp({ appSettings });

  } catch (err) {
    console.log('console: err', err);
    // prettyCode = JSON.parse(err.config.data);
    // prettyCode = prettyCode.code;

    // yield put(setProjectError(err.response.data));
  }
  return result;
}

