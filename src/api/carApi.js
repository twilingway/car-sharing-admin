import requestHttp, { requestHttpAuth } from './http';

export async function getCar(urlParams) {
  const res = await requestHttpAuth('db/car', urlParams);
  return res;
}

export async function getCarByCategory(id) {
  const res = await requestHttp(`db/car?categoryId=${id}`);
  return res;
}
