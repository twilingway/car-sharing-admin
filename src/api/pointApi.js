import requestHttp from './http';

export async function getCity() {
  const res = await requestHttp('db/city');
  return res;
}

export async function getPoint(id) {
  const res = await requestHttp(`db/point?cityId=${id}`);
  return res;
}
