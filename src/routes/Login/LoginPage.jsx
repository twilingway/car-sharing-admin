import React from 'react';
import { ReactComponent as Logo } from '../../assets/logo.svg';

import s from './login.module.scss';

function LoginPage() {
  return (
    <div className={s.context}>
      <div className={s.header}>
        <Logo />
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
          <button type="button">Войти</button>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
