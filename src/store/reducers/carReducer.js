import { createSlice } from '@reduxjs/toolkit';
import { fetchCar, fetchCarById } from '../thunks/carThunks';

const carInitialState = {
  isFetch: false,
  isError: false,
  isSuccess: false,
  page: 1,
  limit: 10,
  data: [],
  error: {},
};

export const slice = createSlice({
  name: 'car',
  initialState: carInitialState,
  reducers: {
    setCarPage: (state, action) => ({
      ...state,
      page: action.payload,
    }),
  },
  extraReducers: {
    [fetchCar.pending]: (state) => ({
      ...state,
      isFetch: true,
      isSuccess: false,
      isError: false,
      data: [],
    }),

    [fetchCar.fulfilled]: (state, action) => ({
      ...state,
      isFetch: false,
      isSuccess: true,
      count: action.payload.count,
      data: action.payload.data,
    }),
    [fetchCar.rejected]: (state, action) => ({
      ...state,
      isFetch: false,
      isError: true,
      data: [],
      error: action.payload,
    }),
    [fetchCarById.pending]: (state) => ({
      ...state,
      isFetch: true,
      isSuccess: false,
      isError: false,
      data: [],
    }),

    [fetchCarById.fulfilled]: (state, action) => ({
      ...state,
      isFetch: false,
      isSuccess: true,
      data: action.payload,
    }),
    [fetchCarById.rejected]: (state, action) => ({
      ...state,
      isFetch: false,
      isError: true,
      data: [],
      error: action.payload,
    }),
  },
});

export const { setCarPage } = slice.actions;

export default slice.reducer;
