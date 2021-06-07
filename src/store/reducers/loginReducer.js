import { createSlice } from '@reduxjs/toolkit';
import fetchLogin, { fetchLogout } from '../thunks/loginThunks';

export const slice = createSlice({
  name: 'login',
  initialState: {
    isFetch: false,
    isSuccess: false,
    isError: false,
    data: {},
    error: {},
  },
  reducers: {},
  extraReducers: {
    [fetchLogin.pending]: (state) => ({
      ...state,
      isFetch: true,
      isSuccess: false,
      isError: false,
      data: {},
      error: {},
    }),

    [fetchLogin.fulfilled]: (state, action) => ({
      ...state,
      isFetch: false,
      isSuccess: true,
      data: action.payload,
    }),
    [fetchLogin.rejected]: (state, action) => ({
      ...state,
      isFetch: false,
      isError: true,
      data: {},
      error: action.payload,
    }),
    [fetchLogout.pending]: () => ({
      isFetch: true,
      isSuccess: false,
      isError: false,
      data: {},
      error: {},
    }),
    [fetchLogout.fulfilled]: () => ({
      isFetch: false,
      isSuccess: false,
      isError: false,
      data: {},
      error: {},
    }),
    [fetchLogout.rejected]: (state, action) => ({
      ...state,
      isFetch: false,
      isError: true,
      data: {},
      error: action.payload,
    }),
  },
});

export default slice.reducer;
