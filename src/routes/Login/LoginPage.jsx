/* eslint-disable react/prop-types */
import React from 'react';
import { ReactComponent as LogoSVG } from '../../assets/logo.svg';
import Button from '../../components/Button';

import s from './login.module.scss';

function LoginPage({ onClickButton }) {
  return (
    <div className={s.context}>
      <div className={s.header}>
        <LogoSVG />
        <span className={s.title}>Need for drive</span>
      </div>
      <form
        action="#"
        method="get"
        encType="multipart/form-data"
        className={s.form}
      >
        <div className={s.title}>Вход</div>
        <div className={s.login}>
          <p>Почта</p>
          <input
            tabIndex="0"
            placeholder="Введите Email"
            type="text"
            name="login"
          />
        </div>
        <div className={s.password}>
          <p>Пароль</p>
          <input
            tabIndex="0"
            placeholder="Введите пароль"
            type="password"
            name="password"
          />
        </div>
        <div className={s.footer}>
          <span>Запросить доступ</span>
          <Button
            className={s.button}
            name="Войти"
            onClickHandler={onClickButton}
          />
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
