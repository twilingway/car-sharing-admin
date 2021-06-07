import React from 'react';
import ButtonEditGroup from '../../ButtonEditGroup';

import s from './point.module.scss';

function Point({ points, onEditClick }) {
  return (
    <div className={s.content}>
      {points?.map((item) => (
        <div key={item.id} className={s.row}>
          <div className={s.params}>
            <div className={s.city}>
              <span>Город:</span>
              <input disabled value={item?.cityId?.name} />
            </div>
            <div className={s.address}>
              <span>Адресс:</span> <input disabled value={item.address} />
            </div>
            <div className={s.name}>
              <span>Название:</span> <input disabled value={item?.name} />
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

export default Point;
