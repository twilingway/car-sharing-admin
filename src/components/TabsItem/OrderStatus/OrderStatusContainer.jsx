import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectOrderStatus } from '../../../store/selectors/orderStatusSelectors';
import fetchOrderStatus from '../../../store/thunks/orderStatusThunks';

import OrderStatus from './OrderStatus';

function OrderStatusContainer() {
  const dispatch = useDispatch();
  const orderStatusReducer = useSelector(selectOrderStatus);
  const [editable, setEditable] = useState(null);
  const [editValue, setEditValue] = useState(null);

  const handleEditClick = (id) => {
    setEditable(id);
  };

  const handleChange = (event) => {
    setEditValue(event.target.value);
  };

  useEffect(() => {
    dispatch(fetchOrderStatus());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <OrderStatus
      orders={orderStatusReducer.data}
      onEditClick={handleEditClick}
      editable={editable}
      onChange={handleChange}
      editValue={editValue}
    />
  );
}

export default OrderStatusContainer;
