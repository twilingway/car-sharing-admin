/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { ReactComponent as LogoSVG } from '../../assets/logo.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';

import s from './login.module.scss';

function LoginPage({ onSubmit }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ username, password });
    setUsername('');
    setPassword('');
  };

  return (
    <div className={s.context}>
      <div className={s.header}>
        <LogoSVG />
        <span className={s.title}>Need for drive</span>
      </div>
      <form onSubmit={handleSubmit} className={s.form}>
        <div className={s.title}>Вход</div>
        <div className={s.login}>
          <Input
            label="Email"
            value={username}
            name="username"
            placeholder="Введите Email"
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div className={s.password}>
          <Input
            label="Пароль"
            value={password}
            name="password"
            type="password"
            placeholder="Введите пароль"
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div className={s.footer}>
          <span>Запросить доступ</span>
          <Button
            className={s.button}
            name="Войти"
            onClickHandler={handleSubmit}
          />
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
