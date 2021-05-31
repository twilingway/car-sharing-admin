import React, { useState } from 'react';
import Select from 'react-select';
import Autocomplete from '../Autocomplete/Autocomplete';
import Pagination from '../Pagination';

import Image from '../ImageLazy';

import s from './orderList.module.scss';

function OrderList({
  orders,
  onPageClick,
  onApplyClick,
  orderStatus,
  onSelect,
}) {
  console.log('orderStatus :>> ', orderStatus);
  return (
    <>
      <div className={s.title}>
        <h1>Заказы</h1>
      </div>
      <div className={s.carOrder}>
        <div className={s.container}>
          <div className={s.header}>
            <div className={s.filters}>
              <Autocomplete
                options={orderStatus.map((item) => ({
                  value: item.id,
                  label: item.name,
                }))}
                placeholder="Выбери тип"
                onSelect={onSelect}
              />
              {/* <Autocomplete />
              <Autocomplete />
              <Autocomplete /> */}
            </div>
            <button type="button" onClick={onApplyClick}>
              Применить
            </button>
          </div>
          <div className={s.main}>
            {orders.data.map((order) => (
              <div className={s.row} key={order.id}>
                <div className={s.image}>
                  <Image
                    src={order.carId?.thumbnail?.path}
                    alt={order.carId?.name}
                  />
                </div>
                <div className={s.orderInfo}>
                  <div>
                    <b>{order.carId?.name}</b> в {order.cityId?.name},
                    {order.pointId?.address}
                  </div>
                  <div>
                    {new Date(order.dateFrom).toLocaleString().slice(0, -3)} -{' '}
                    {new Date(order.dateTo).toLocaleString().slice(0, -3)}
                  </div>
                  <div className="color">
                    Цвет: <b>{order?.color}</b>
                  </div>
                </div>
                <div className={s.additional}>
                  <div className={s.fullTank}>{order?.isFullTank}</div>
                  <div className={s.chair}>{order?.isNeedChildChair}</div>
                  <div className={s.rightWhell}>{order?.isRightWheel}</div>
                </div>
                <div className={s.price}>{order.price} ₽</div>
                <div className={s.buttonGroup}>кнопки</div>
              </div>
            ))}
          </div>
          <div className={s.footer}>
            <Pagination
              count={orders.count}
              limit={orders.limit}
              page={orders.page}
              onPageClick={onPageClick}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderList;
