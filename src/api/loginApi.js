import requestHttp from './http';

export default async function login(data) {
  const res = await requestHttp('auth/login/', 'POST', data);
  return res;
}
