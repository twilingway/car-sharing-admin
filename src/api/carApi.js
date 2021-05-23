import requestHttp from './http';

export async function getCar(urlParams) {
  const { page, limit } = urlParams;
  console.log('lim :>> ', limit);
  const res = await requestHttp(`db/car?page=${page}&limit=${limit}`);
  return res;
}

export async function getCarByCategory(id) {
  const res = await requestHttp(`car?categoryId=${id}`);
  return res;
}
