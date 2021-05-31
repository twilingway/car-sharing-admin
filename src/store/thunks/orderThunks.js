import { createAsyncThunk } from '@reduxjs/toolkit';
import orderPost, {
  getAllOrders,
  getOrderById,
  orderPut,
} from '../../api/orderApi';

export const fetchOrderById = createAsyncThunk(
  'order/fetchOrderById',
  async (id) => {
    const response = await getOrderById(id);
    return response.data;
  },
);

export const putOrder = createAsyncThunk('order/putOrder', async (body) => {
  const response = await orderPut(body);
  return response.data;
});

const getOrders = createAsyncThunk('order/getAllOrders', async (urlParams) => {
  const response = await getAllOrders(urlParams);
  return response;
});

export const postOrder = createAsyncThunk('order/postOrder', async (body) => {
  const response = await orderPost(body);
  return response.data;
});

export default getOrders;
