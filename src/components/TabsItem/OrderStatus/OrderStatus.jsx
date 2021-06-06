import React from 'react';
import ButtonEditGroup from '../../ButtonEditGroup';

import ButtonGroup from '../../ButtonGroup';

import s from './orderStatus.module.scss';

function OrderStatus({ orders, onEditClick, editable, onChange, editValue }) {
  return (
    <div className={s.content}>
      {orders?.map((item) => (
        <div key={item.id} className={s.row}>
          <div className={s.params}>
            <div className={s.name}>
              <span>Название:</span>
              <input
                disabled={item?.id !== editable}
                value={item?.id === editable ? editValue : item.name}
                onChange={(value) => onChange(value)}
              />
            </div>
          </div>
          <div className={s.editGroup}>
            <ButtonEditGroup onEditClick={() => onEditClick(item.id)} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default OrderStatus;
