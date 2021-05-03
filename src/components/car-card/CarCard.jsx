import React from 'react';
import CardCarContainer from '../card-car';
import CardCarSettingsContainer from '../card-car-settings';

import s from './car-card.module.scss';

function CarCard() {
  return (
    <>
      <div className={s.title}>
        <h1>Карточка автомобиля</h1>
      </div>
      <div className={s.cardAuto}>
        <CardCarContainer />
        <CardCarSettingsContainer />
      </div>
    </>
  );
}

export default CarCard;
