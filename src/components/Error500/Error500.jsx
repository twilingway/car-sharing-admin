/* eslint-disable react/prop-types */
import React from 'react';

import s from './error-500.module.scss';

function Error500({ onClickBackButton }) {
  return (
    <div className={s.wrap}>
      <div className={s.content}>
        <div className={s.title}>500</div>
        <div className={s.text}>Что то пошло не так</div>
        <div className={s.footer}>Попробуйте перезагрузить страницу</div>
        <button type="button" onClick={onClickBackButton}>
          Назад
        </button>
      </div>
    </div>
  );
}

export default Error500;
