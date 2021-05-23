import { createAsyncThunk } from '@reduxjs/toolkit';
import login from '../../api/loginApi';

const fetchLogin = createAsyncThunk('login/fetchLogin', async (data) => {
  const response = await login(data);
  return response;
});

export const fetchLogout = createAsyncThunk(
  'login/fetchLogout',
  async () => {},
);

export default fetchLogin;
