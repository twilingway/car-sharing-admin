import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setOrderPage,
  setOrderStatusId,
} from '../../store/reducers/orderReducer';
import { selectOrder } from '../../store/selectors/orderSelectors';
import { selectOrderStatus } from '../../store/selectors/orderStatusSelectors';
import fetchOrderStatus from '../../store/thunks/orderStatusThunks';
import getOrders from '../../store/thunks/orderThunks';
import Loader from '../Loader';
import OrderList from './OrderList';

function CarOrderContainer() {
  const orderReducer = useSelector(selectOrder);
  const orderStatusReducer = useSelector(selectOrderStatus);
  const dispatch = useDispatch();

  const handlePageClick = (page) => {
    dispatch(setOrderPage(page));
  };

  const handleApplyCLick = () => {
    dispatch(
      getOrders({
        page: orderReducer.page,
        limit: orderReducer.limit,
        orderStatusId: orderReducer.orderStatusId,
      }),
    );
  };

  const handleOrderStatusSelect = (orderStatus) => {
    dispatch(setOrderStatusId(orderStatus.value));
  };

  useEffect(() => {
    dispatch(getOrders({ page: orderReducer.page, limit: orderReducer.limit }));
  }, [dispatch, orderReducer.limit, orderReducer.page]);

  useEffect(() => {
    dispatch(fetchOrderStatus());
    dispatch(getOrders({ page: orderReducer.page, limit: orderReducer.limit }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (orderReducer.isFetch) {
    return <Loader />;
  }

  return (
    <OrderList
      orders={orderReducer}
      orderStatus={orderStatusReducer.data}
      onPageClick={handlePageClick}
      onApplyClick={handleApplyCLick}
      onSelect={handleOrderStatusSelect}
    />
  );
}

export default CarOrderContainer;
