const axios = require('axios');

const base = btoa(
  unescape(encodeURIComponent(`random:${process.env.REACT_APP_SECRET}`)),
);

const headersConfig = {
  'X-Api-Factory-Application-Id': process.env.REACT_APP_X_API_FACTORY_KEY,
  Authorization: `Basic ${base}`,
};

async function requestHttp(
  url,
  method = 'GET',
  body = null,
  headers = headersConfig || {},
) {
  let newBody = { ...body };
  const newHeader = headers;
  if (newBody) {
    newBody = JSON.stringify(newBody);
    newHeader['Content-Type'] = 'application/json';
  }

  const res = await axios({
    url: `${process.env.REACT_APP_API_URL}${url}`,
    method,
    headers,
    data: newBody,
  });
  return res.data;
}

export async function requestHttpAuth(
  url,
  params,
  method = 'GET',
  body = null,
) {
  const headers = {
    'X-Api-Factory-Application-Id': process.env.REACT_APP_X_API_FACTORY_KEY,
    Authorization: `Bearer ${localStorage.getItem('access_token')}`,
  };
  let newBody = { ...body };
  const newHeader = headers;

  if (newBody) {
    newBody = JSON.stringify(newBody);
    newHeader['Content-Type'] = 'application/json';
  }

  const res = await axios({
    url: `${process.env.REACT_APP_API_URL}${url}`,
    method,
    headers,
    data: newBody,
    params,
  });
  return res.data;
}

export default requestHttp;
