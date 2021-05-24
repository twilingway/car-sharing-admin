import React from 'react';
import Autocomplete from '../Autocomplete/Autocomplete';
import PaginationContainer from '../Pagination';

import s from './orderList.module.scss';

function OrderList({ orders, count }) {
  return (
    <>
      <div className={s.title}>
        <h1>Заказы</h1>
      </div>
      <div className={s.carOrder}>
        <div className={s.container}>
          <div className={s.header}>
            <div className={s.filters}>
              <Autocomplete />
              <Autocomplete />
              <Autocomplete />
              <Autocomplete />
            </div>
            <button type="button">Применить</button>
          </div>
          <div className={s.main}>
            {orders.map((order) => (
              <div className={s.row} key={order.id}>
                <div className={s.image}>
                  <img
                    src={`${process.env.REACT_APP_BASE_URL}${order.carId?.thumbnail?.path}`}
                    alt={order.carId?.name}
                  />
                </div>
                <div className={s.orderInfo}>
                  {order.carId?.name}в {order.cityId?.name},
                  {order.pointId?.address}
                </div>
                <div className={s.additional}>
                  <div className={s.fullTank}>{order.isFullTank}</div>
                  <div className={s.chair}>{order.chair}</div>
                  <div className={s.rightWhell}>{order.isRightWheel}</div>
                </div>
                <div className={s.price}>{order.price} ₽</div>
                <div className={s.buttonGroup}>кнопки</div>
              </div>
            ))}
          </div>
          <div className={s.footer}>
            <PaginationContainer count={26000} limit="10" page="1434" />
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderList;
