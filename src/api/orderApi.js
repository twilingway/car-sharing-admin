import requestHttp, { requestHttpAuth } from './http';

export async function getOrderById(id) {
  const res = await requestHttp(`order/${id}`);
  return res;
}

export async function getAllOrders() {
  const page = 1;
  const limit = 10;

  const res = await requestHttpAuth(`db/order?page=${page}&limit=${limit}`);
  return res;
}

export async function orderPut(body) {
  const res = await requestHttp(`order/${body.id}`, 'PUT', body);
  return res;
}

export default async function orderPost(body) {
  const res = await requestHttp('order', 'POST', body);
  return res;
}
