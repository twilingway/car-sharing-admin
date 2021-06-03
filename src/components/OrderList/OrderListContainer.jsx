import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  setOrderPage,
  setOrderStatusId,
  setPoint,
} from '../../store/reducers/orderReducer';
import { selectOrder } from '../../store/selectors/orderSelectors';
import { selectOrderStatus } from '../../store/selectors/orderStatusSelectors';
import { selectPoint } from '../../store/selectors/pointSelectors';
import fetchOrderStatus from '../../store/thunks/orderStatusThunks';
import getOrders from '../../store/thunks/orderThunks';
import { fetchCity } from '../../store/thunks/pointThunks';
import Loader from '../Loader';
import OrderList from './OrderList';

function CarOrderContainer() {
  const orderReducer = useSelector(selectOrder);
  const orderStatusReducer = useSelector(selectOrderStatus);
  const pointReducer = useSelector(selectPoint);
  const dispatch = useDispatch();

  const handlePageClick = (page) => {
    dispatch(setOrderPage(page));
    dispatch(
      getOrders({
        page,
        limit: orderReducer.limit,
        orderStatusId: orderReducer.orderStatusId?.value,
        cityId: orderReducer.point?.value,
      }),
    );
  };

  const handleApplyCLick = () => {
    dispatch(setOrderPage(1));
    dispatch(
      getOrders({
        page: 1,
        limit: orderReducer.limit,
        orderStatusId: orderReducer.orderStatusId?.value,
        cityId: orderReducer.point?.value,
      }),
    );
  };

  const handleOrderStatusSelect = (orderStatus) => {
    dispatch(setOrderStatusId(orderStatus));
  };

  const handlePointSelect = (point) => {
    dispatch(setPoint(point));
  };

  // useEffect(() => {
  //   dispatch(getOrders({ page: orderReducer.page, limit: orderReducer.limit }));
  // }, [dispatch, orderReducer.limit, orderReducer.page]);

  useEffect(() => {
    dispatch(fetchOrderStatus());
    dispatch(getOrders({ page: orderReducer.page, limit: orderReducer.limit }));
    dispatch(fetchCity());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (orderReducer.isFetch) {
    return <Loader />;
  }

  return (
    <OrderList
      orders={orderReducer}
      orderStatus={orderStatusReducer.data}
      points={pointReducer}
      onPageClick={handlePageClick}
      onApplyClick={handleApplyCLick}
      onSelect={handleOrderStatusSelect}
      onSelectPoint={handlePointSelect}
      valueOrderStatus={orderReducer.orderStatusId}
      valuePoint={orderReducer.point}
    />
  );
}

export default CarOrderContainer;
