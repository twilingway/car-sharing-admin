/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import cn from 'classnames';

import { ReactComponent as CheckSVG } from '../../assets/check_icon.svg';

import { ReactComponent as SearchSVG } from '../../assets/search.svg';

import { ReactComponent as NotifySVG } from '../../assets/notifications.svg';
import { ReactComponent as DropdownSVG } from '../../assets/dropdown_icon.svg';
import { ReactComponent as CloseSVG } from '../../assets/close.svg';

import avatarPNG from '../../assets/avatar.png';

import s from './adminpage.module.scss';
import Hamburger from '../../components/Hamburger';
import SideBarContainer from '../../components/SideBar';

function AdminPage({ children, onLogout }) {
  const onChangeServices = () => {};
  return (
    <div className={s.wrapper}>
      <SideBarContainer />
      <content className={s.content}>
        <header className={s.header}>
          <div className={s.search}>
            <SearchSVG className={s.searchSVG} />
            <input type="text" placeholder="Поиск ..." />
          </div>
          <div className={s.account}>
            <div className={s.notify}>
              <NotifySVG />
              <div className={s.counter}>2</div>
            </div>
            <div className={s.user}>
              <img src={avatarPNG} alt="Avatar" />
              <span>Admin</span>
              <DropdownSVG className={s.dropdown} onClick={onLogout} />
            </div>
          </div>
        </header>
        {/* <div className={s.action}>
          <CheckSVG />
          <span>Успех! Машина сохранена</span>
          <CloseSVG className={s.close} />
        </div> */}
        <main className={s.main}>
          {children}
          {/* <div className={s.title}>
            <h1>Карточка автомобиля</h1>
          </div>
          <div className={s.cardAuto}>
            <CardCarContainer />
            <CardCarSettingsContainer />
          </div> */}
        </main>
        <footer className={s.footer}>
          <div className={s.hamburger}>
            <Hamburger />{' '}
          </div>
          <div className={s.menu}>
            <ul>
              <li>Главная страница</li>
              <li>Ссылка</li>
            </ul>
          </div>
          <div className={s.copyright}>Copyright © 2020 Simbirsoft</div>
        </footer>
      </content>
    </div>
  );
}

export default AdminPage;
