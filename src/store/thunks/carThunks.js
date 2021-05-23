import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCar, getCarByCategory } from '../../api/carApi';

export const fetchCar = createAsyncThunk('car/fetchCar', async (urlParams) => {
  const response = await getCar(urlParams);
  return response.data;
});

export const fetchCarById = createAsyncThunk('car/fetchCarById', async (id) => {
  const response = await getCarByCategory(id);
  return response.data;
});
