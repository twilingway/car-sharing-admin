import React from 'react';
import carCardPNG from '../../assets/carCard.png';

import s from './cardCar.module.scss';

function CardCar({ onChangeSelectFile, fileName }) {
  return (
    <div className={s.cardCar}>
      <img src={carCardPNG} alt="carCard" />
      <div className={s.name}>Hyndai, i30 N</div>
      <div className={s.type}>Компакт-кар</div>
      <input
        type="file"
        name="file"
        accept="image/*"
        onChange={onChangeSelectFile}
      />
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
