import requestHttp, { requestHttpAuth } from './http';

export async function getOrderById(id) {
  const res = await requestHttp(`order/${id}`);
  return res;
}

export async function getAllOrders(params) {
  const res = await requestHttpAuth('db/order', params);
  return res;
}

export async function orderPut(body) {
  const res = await requestHttp(`db/order/${body.id}`, 'PUT', body);
  return res;
}

export default async function orderPost(body) {
  const res = await requestHttp('db/order', 'POST', body);
  return res;
}
