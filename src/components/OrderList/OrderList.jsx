import React from 'react';
import Autocomplete from '../Autocomplete/Autocomplete';
import Pagination from '../Pagination';

import Image from '../ImageLazy';

import FilterCheckbox from '../Filter/FilterTypes/FilterCheckbox';
import s from './orderList.module.scss';
import Button from '../Button/Button';
import ButtonGroup from '../ButtonGroup/ButtonGroup';

function OrderList({
  orders,
  points,
  onPageClick,
  onApplyClick,
  orderStatus,
  onSelect,
  onSelectPoint,
  valueOrderStatus,
  valuePoint,
  onReadyClick,
  onCancelClick,
  onEditClick,
}) {
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
                value={
                  !valuePoint
                    ? null
                    : {
                        value: valuePoint.value,
                        label: valuePoint.label,
                      }
                }
                options={points.city.map((item) => ({
                  value: item.id,
                  label: item.name,
                }))}
                placeholder="Город"
                onSelect={onSelectPoint}
              />
              <Autocomplete
                value={
                  !valueOrderStatus
                    ? null
                    : {
                        value: valueOrderStatus.value,
                        label: valueOrderStatus.label,
                      }
                }
                options={orderStatus.map((item) => ({
                  value: item.id,
                  label: item.name,
                }))}
                placeholder="Статус"
                onSelect={onSelect}
              />
            </div>
            <Button onClickHandler={onApplyClick} name="Применить" />
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
                  <FilterCheckbox
                    id={order.id}
                    isDisabled
                    checkboxs={[
                      {
                        id: 'isFullTank',
                        isFullTank: order.isFullTank,
                        name: 'Полный бак',
                        price: ', 500р',
                      },
                      {
                        id: 'isNeedChildChair',
                        isNeedChildChair: order.isNeedChildChair,
                        name: 'Детское кресло',
                        price: ', 200р',
                      },
                      {
                        id: 'isRightWheel',
                        isRightWheel: order.isRightWheel,
                        name: 'Правый руль',
                        price: ', 1600р',
                      },
                    ]}
                    // onChangeBox={onChangeServices}
                    // groupName="Доп услуги"
                    // defaultChecked={
                    //   orderRedux.isFullTank === null && 'Полный бак'
                    // }
                    isColumn
                  />
                </div>
                <div className={s.price}>{order.price} ₽</div>
                <div className={s.buttonGroup}>
                  {order?.orderStatusId?.name === 'new' && (
                    <ButtonGroup
                      id={order.id}
                      onReadyClick={onReadyClick}
                      onCancelClick={onCancelClick}
                      onEditClick={onEditClick}
                    />
                  )}
                </div>
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
