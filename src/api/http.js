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
  console.log('url :>> ', url);
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

export default requestHttp;
