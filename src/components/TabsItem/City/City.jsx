import React from 'react';

import s from './city.module.scss';

function City({ city }) {
  return (
    <div className={s.content}>
      {city?.map((item) => (
        <div key={item.id} className={s.row}>
          <div className={s.params}>
            <div className={s.name}>
              <span>Название:</span>
              <input disabled value={item.name} />
            </div>
            {/* <div className={s.description}>
              <span>Описание:</span> <input disabled value={item.description} />
            </div> */}
          </div>
          <div className={s.editGroup}>Изменить/Удалить</div>
        </div>
      ))}
    </div>
  );
}

export default City;
