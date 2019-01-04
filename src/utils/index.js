import axios from 'axios';

export const boxArray = obj => {
  return Object.prototype.toString.call(obj) != '[object Array]'
    ?  Object.values(obj)
    : obj;
};

function prettify(code){
  return axios.post('http://localhost:5000/api/prettify', code);
}

export function* getPrettyCode(code) {
  let prettyCode = '';
  try {
    const res = yield prettify({ code });
    prettyCode = res.data;
  } catch (err) {
    prettyCode = JSON.parse(err.config.data);
    prettyCode = prettyCode.code + '\n' + err.response.data;
  }
  return prettyCode;
}