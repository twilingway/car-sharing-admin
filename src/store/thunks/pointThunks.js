import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCity, getPoint } from '../../api/pointApi';

const fetchCity = createAsyncThunk('db/point/fetchCity', async () => {
  const response = await getCity();
  return response.data;
});

export const fetchPoint = createAsyncThunk(
  'db/point/fetchPoint',
  async (id) => {
    const response = await getPoint();
    return response.data;
  },
);

export const fetchPointById = createAsyncThunk(
  'db/point/fetchPointById',
  async (id) => {
    const response = await getPoint(id);
    return response.data;
  },
);

export default fetchCity;
