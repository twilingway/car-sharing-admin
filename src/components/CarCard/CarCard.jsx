import React from 'react';
import CardCarContainer from '../CardCar';
import CardCarSettingsContainer from '../CardCarSettings';

import s from './carCard.module.scss';

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
