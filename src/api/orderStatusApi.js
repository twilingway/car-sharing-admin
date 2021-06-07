import requestHttp from './http';

export default async function getOrderStatus() {
  const res = await requestHttp('db/orderStatus');
  return res;
}
