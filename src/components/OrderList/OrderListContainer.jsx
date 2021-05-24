import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectOrder } from '../../store/selectors/orderSelectors';
import { getOrders } from '../../store/thunks/orderThunks';
import OrderList from './OrderList';

function CarOrderContainer() {
  const orderReducer = useSelector(selectOrder);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrders());
  }, []);

  return <OrderList orders={orderReducer.data} count={orderReducer.count} />;
}

export default CarOrderContainer;
