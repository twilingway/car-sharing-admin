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
import getOrders, { putOrder } from '../../store/thunks/orderThunks';
import fetchCity from '../../store/thunks/pointThunks';
import Loader from '../Loader';
import OrderList from './OrderList';

function CarOrderContainer() {
  const orderReducer = useSelector(selectOrder);
  const orderStatusReducer = useSelector(selectOrderStatus);
  const pointReducer = useSelector(selectPoint);
  const dispatch = useDispatch();

  const handleGetOrders = (page) => {
    dispatch(
      getOrders({
        page: !page ? orderReducer.page : page,
        limit: orderReducer.limit,
        orderStatusId: orderReducer.orderStatusId?.value,
        cityId: orderReducer.point?.value,
        'sort[dateTo]': -1,
      }),
    );
  };

  const handlePageClick = (page) => {
    dispatch(setOrderPage(page));
    handleGetOrders(page);
  };

  const handleApplyCLick = () => {
    dispatch(setOrderPage(1));
    handleGetOrders(1);
  };

  const handleOrderStatusSelect = (orderStatus) => {
    dispatch(setOrderStatusId(orderStatus));
  };

  const handlePointSelect = (point) => {
    dispatch(setPoint(point));
  };

  const handleReadyClick = async (id) => {
    const order = orderReducer.data.find((item) => item.id === id);
    const orderStatusConfirmed = orderStatusReducer.data.find(
      (item) => item.name === 'confirmed',
    );
    const confirm = { ...order, orderStatusId: orderStatusConfirmed };

    await dispatch(putOrder(confirm));
    handleGetOrders();
  };
  const handleCancelClick = async (id) => {
    const order = orderReducer.data.find((item) => item.id === id);
    const orderStatusCancelled = orderStatusReducer.data.find(
      (item) => item.name === 'cancelled',
    );
    const censeled = { ...order, orderStatusId: orderStatusCancelled };

    await dispatch(putOrder(censeled));
    handleGetOrders();
  };
  const handleEditClick = (id) => {};

  useEffect(() => {
    dispatch(fetchOrderStatus());
    handleGetOrders();
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
      onReadyClick={handleReadyClick}
      onCancelClick={handleCancelClick}
      onEditClick={handleEditClick}
    />
  );
}

export default CarOrderContainer;
