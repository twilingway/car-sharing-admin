import React from 'react';
import Autocomplete from '../Autocomplete/Autocomplete';
import PaginationContainer from '../Pagination';

import s from './car-order.module.scss';

function CarOrder() {
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
          <div className={s.main}>123</div>
          <div className={s.footer}>
            <PaginationContainer />
          </div>
        </div>
      </div>
    </>
  );
}

export default CarOrder;
