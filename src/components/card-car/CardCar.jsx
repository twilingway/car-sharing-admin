import React from 'react';
import carCardPNG from '../../assets/carCard.png';

import s from './card-car.module.scss';

function CardCar() {
  return (
    <div className={s.cardCar}>
      <img src={carCardPNG} alt="carCard" />
      <div className={s.name}>Hyndai, i30 N</div>
      <div className={s.type}>Компакт-кар</div>
      <input type="file" />
      <div className={s.progres}>Заполнено</div>
      <div className={s.discription}>
        <div className={s.title}>Описание</div>
        <div className={s.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eaque,
          quidem, commodi soluta qui quae quod dolorum sint alias, possimus
          illum assumenda eligendi cumque?
        </div>
      </div>
    </div>
  );
}

export default CardCar;
