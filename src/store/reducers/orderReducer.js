import { createSlice } from '@reduxjs/toolkit';
import postOrder, {
  fetchOrderById,
  putOrder,
  getOrders,
} from '../thunks/orderThunks';

export const slice = createSlice({
  name: 'order',
  initialState: {
    isFetch: false,
    isError: false,
    isSuccess: false,
    count: null,
    page: 1,
    limit: 10,
    data: [
      {
        id: null,
        orderStatusId: {
          name: null,
          id: null,
        },
        cityId: {
          name: null,
          id: null,
        },
        pointId: {
          address: null,
          name: null,
          id: null,
        },
        carId: {
          name: null,
          id: null,
        },
        color: null,
        dateFrom: null,
        dateTo: null,
        price: null,
        rateId: {
          unit: null,
          name: null,
          id: null,
        },
        isFullTank: null,
        isNeedChildChair: null,
        isRightWheel: null,
        duration: null,
      },
    ],
    error: {},
  },
  reducers: {},
  extraReducers: {
    [postOrder.pending]: (state) => ({
      ...state,
      isFetch: true,
      isSuccess: false,
      isError: false,
      error: {},
    }),

    [postOrder.fulfilled]: (state, action) => ({
      ...state,
      ...action.payload,
      isFetch: false,
      isSuccess: true,
    }),
    [postOrder.rejected]: (state, action) => ({
      ...state,
      isFetch: false,
      isError: true,
      error: action.payload,
    }),
    [putOrder.pending]: (state) => ({
      ...state,
      isFetch: true,
      isSuccess: false,
      isError: false,
      error: {},
    }),

    [putOrder.fulfilled]: (state, action) => ({
      ...state,
      ...action.payload,
      isFetch: false,
      isSuccess: true,
    }),
    [putOrder.rejected]: (state, action) => ({
      ...state,
      isFetch: false,
      isError: true,
      error: action.payload,
    }),
    [fetchOrderById.pending]: (state) => ({
      ...state,
      isFetch: true,
      isSuccess: false,
      isError: false,
      error: {},
    }),

    [fetchOrderById.fulfilled]: (state, action) => ({
      ...state,
      isFetch: false,
      isSuccess: true,
      error: {},
      ...action.payload,
    }),
    [fetchOrderById.rejected]: (state, action) => ({
      ...state,
      isFetch: false,
      isSuccess: false,
      isError: true,
      error: action.payload,
    }),
    [getOrders.pending]: (state) => ({
      ...state,
      isFetch: true,
      isSuccess: false,
      isError: false,
      error: {},
    }),

    [getOrders.fulfilled]: (state, action) => ({
      ...state,
      isFetch: false,
      isSuccess: true,
      error: {},
      count: action.payload.count,
      data: action.payload.data,
    }),
    [getOrders.rejected]: (state, action) => ({
      ...state,
      isFetch: false,
      isSuccess: false,
      isError: true,
      error: action.payload,
    }),
  },
});

export default slice.reducer;
